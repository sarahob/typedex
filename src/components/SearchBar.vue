<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useTypeStore } from '@/stores/pokemonTypes';
import DynamicIcon from './DynamicIcon.vue';

// Import SVGs as components
import BugIcon from '@/assets/type-icons/bug.svg';
import DarkIcon from '@/assets/type-icons/dark.svg';
import DragonIcon from '@/assets/type-icons/dragon.svg';
import ElectricIcon from '@/assets/type-icons/electric.svg';
import FairyIcon from '@/assets/type-icons/fairy.svg';
import FightingIcon from '@/assets/type-icons/fighting.svg';
import FireIcon from '@/assets/type-icons/fire.svg';
import FlyingIcon from '@/assets/type-icons/flying.svg';
import GhostIcon from '@/assets/type-icons/ghost.svg';
import GrassIcon from '@/assets/type-icons/grass.svg';
import GroundIcon from '@/assets/type-icons/ground.svg';
import IceIcon from '@/assets/type-icons/ice.svg';
import NormalIcon from '@/assets/type-icons/normal.svg';
import PoisonIcon from '@/assets/type-icons/poison.svg';
import PsychicIcon from '@/assets/type-icons/psychic.svg';
import RockIcon from '@/assets/type-icons/rock.svg';
import SteelIcon from '@/assets/type-icons/steel.svg';
import WaterIcon from '@/assets/type-icons/water.svg';

const typeIconMap: Record<string, string> = {
  bug: BugIcon,
  dark: DarkIcon,
  dragon: DragonIcon,
  electric: ElectricIcon,
  fairy: FairyIcon,
  fighting: FightingIcon,
  fire: FireIcon,
  flying: FlyingIcon,
  ghost: GhostIcon,
  grass: GrassIcon,
  ground: GroundIcon,
  ice: IceIcon,
  normal: NormalIcon,
  poison: PoisonIcon,
  psychic: PsychicIcon,
  rock: RockIcon,
  steel: SteelIcon,
  water: WaterIcon,
};

// Emit selection of a type label (or null)
const emit = defineEmits<{
  (e: 'typeSelected', value: string | null): void;
}>();

// Use store data if available; fallback to mock
const typeStore = useTypeStore();
const { types } = storeToRefs(typeStore);

type Item = { id: number; label: string };
const allItems = computed<Item[]>(() => {
  if (types?.value?.length) {
    return types.value.map((t, i) => ({ id: i, label: t.name }));
  }
  console.error('Type store is empty or unavailable');
  return [];
});

const query = ref('');
const open = ref(false);
const highlightedIndex = ref(-1); // -1 means none highlighted

// Filtered results based on query
const results = computed<Item[]>(() => {
  const q = query.value.trim().toLowerCase();
  const filtered = q
    ? allItems.value.filter((i) => i.label.toLowerCase().startsWith(q))
    : allItems.value;
  return filtered;
});

// ARIA ids
const inputId = 'type-combobox';
const listboxId = 'type-listbox';

// Open the list when typing and close on Escape/selection/blur
function onInput() {
  open.value = query.value.length > 0;

  // If list opens and result found, start with first option highlighted
  highlightedIndex.value = open.value && results.value.length ? 0 : -1;
}

function onKeydown(e: KeyboardEvent) {
  if (!open.value && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    open.value = results.value.length > 0;
    highlightedIndex.value = open.value ? 0 : -1;
    return;
  }
  switch (e.key) {
    case 'ArrowDown': {
      e.preventDefault();
      if (!results.value.length) return;
      highlightedIndex.value = (highlightedIndex.value + 1) % results.value.length;
      break;
    }
    case 'ArrowUp': {
      e.preventDefault();
      if (!results.value.length) return;
      highlightedIndex.value =
        (highlightedIndex.value - 1 + results.value.length) % results.value.length;
      break;
    }
    case 'Enter': {
      if (open.value && highlightedIndex.value >= 0) {
        e.preventDefault();
        const index = highlightedIndex.value;
        const item = results.value[index];
        if (item) {
          selectItem(item);
        }
      }
      break;
    }
    case 'Escape': {
      if (open.value) {
        e.preventDefault();
        open.value = false;
        highlightedIndex.value = -1;
      }
      break;
    }
  }
}

function selectItem(item: Item) {
  // Update query to selected label and close popup
  query.value = item.label;
  open.value = false;
  highlightedIndex.value = -1;
  emit('typeSelected', item.label);
}

// Close on outside click (keeps input the only tabbable element)
function onDocumentClick(ev: MouseEvent) {
  const target = ev.target as HTMLElement | null;
  // If clicking outside this component root, close the list
  // (actual containment handled via template ref)
  if (target && !target.closest('.combobox')) {
    open.value = false;
    highlightedIndex.value = -1;
  }
}

onMounted(() => document.addEventListener('click', onDocumentClick));
onBeforeUnmount(() => document.removeEventListener('click', onDocumentClick));
</script>

<template>
  <div class="combobox">
    <input
      :id="inputId"
      class="combo-input"
      type="search"
      autocomplete="off"
      role="combobox"
      aria-autocomplete="list"
      aria-haspopup="listbox"
      :aria-controls="listboxId"
      :aria-expanded="Boolean(open)"
      :aria-activedescendant="
        open && highlightedIndex >= 0
          ? `${listboxId}-opt-${results[highlightedIndex]?.id}`
          : undefined
      "
      v-model="query"
      placeholder="Search Type..."
      @input="onInput"
      @keydown="onKeydown"
    />

    <!-- Listbox popup rendered using semantic UL/LI -->
    <ul
      v-if="open && results.length"
      :id="listboxId"
      role="listbox"
      :class="`combo-listbox ${results.length > 1 ? 'multi-item-list' : 'single-item-list'}`"
    >
      <li
        v-for="(item, i) in results"
        :key="item.id"
        :id="`${listboxId}-opt-${item.id}`"
        role="option"
        :aria-selected="i === highlightedIndex"
        class="combo-option"
        :class="{ highlighted: i === highlightedIndex }"
        @mousemove.prevent="highlightedIndex = i"
        @mousedown.prevent="selectItem(item)"
      >
        <DynamicIcon height="2.2em" width="2.2em" class="list-item-icon">
          <component :is="typeIconMap[item.label.toLowerCase()]" :alt="`${item.label} type icon`" />
        </DynamicIcon>
        <span class="list-item-label">{{ item.label }}</span>
      </li>
    </ul>
    <ul
      v-if="open && !results.length"
      :id="listboxId"
      role="listbox"
      class="combo-listbox not-found-list"
    >
      <li
        :id="`${listboxId}-opt-not-found`"
        role="option"
        :aria-selected="true"
        class="combo-option"
        :class="{ highlighted: true }"
      >
        <DynamicIcon height="2em" width="2em" class="list-item-icon">
          <img :src="`/src/assets/NotFound.svg`" :alt="`No Result Found icon of Pokemon Unknown`" />
        </DynamicIcon>
        <span class="list-item-label not-found-label"> No result found</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.combobox {
  position: relative;
  width: 100%;
}

.combo-input::placeholder {
  font-weight: 300;
  color: var(--text-secondary-color);
}

.combo-input {
  width: 100%;
  height: 60px;
  border: 1px solid var(--border-primary-color);
  border-radius: 30px;
  font-size: 1.5rem;
  padding: 1.75rem;
  max-width: var(--layout-max-width);
  min-width: var(--layout-min-width);
}

.combo-listbox {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  border: 1px solid var(--border-primary-color);
  background: var(--background-color);
  border-radius: 30px;
}

.not-found-list,
.single-item-list {
  background: var(--highlight-color);
}

.combo-option {
  width: 90%;
  margin: 0px auto;
  cursor: pointer;
  height: 3rem;
  text-align: left;
  line-height: 3rem;
}

.combo-option.highlighted {
  background: var(--highlight-color);
  width: 90%;
  margin: 0px auto;
  border-radius: 30px;
}

.list-item-icon {
  vertical-align: middle;
  margin-left: 1rem;
}

.list-item-label {
  margin-left: 1rem;
  font-size: 1.2rem;
  vertical-align: middle;
}

.not-found-label {
  margin-left: 0px;
}
</style>
