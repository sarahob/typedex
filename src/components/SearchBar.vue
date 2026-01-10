<script setup lang="ts">
import SearchIcon from '@/assets/searchIcon.svg';

import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTypeStore } from '@/stores/pokemonTypes';

const searchQuery = ref('');
const emit = defineEmits(['typeSelected']);

const typeStore = useTypeStore();
const { types } = storeToRefs(typeStore);

function handleSearch() {
  // Find the first type whose name includes the search query (case-insensitive)
  const foundType =
    types.value.find((type) => type.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
      ?.name || null;
  emit('typeSelected', foundType || null);
}
</script>

<template>
  <search>
    <form @submit.prevent="handleSearch">
      <label for="type">Search</label>
      <span>
        <input
          v-model="searchQuery"
          type="search"
          id="type"
          name="q"
          placeholder="Search Pokemon Type..."
        />
        <button type="submit" class="search-btn" aria-label="Search">
          <SearchIcon class="icon" />
        </button>
      </span>
    </form>
  </search>
</template>

<style scoped>
search {
  display: block;
  margin-bottom: 1em;
}

form {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  margin-top: 16px;
}

input {
  height: 4em;
  width: calc(100% - 3.5em);
}

.icon {
  width: 1.5em;
  height: 1.5em;
  display: block;
}

span {
  display: flex;
}

.search-btn {
  background: #d94a3a;
  height: 4em;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  svg {
    fill: white;
    stroke: white;
  }
}
</style>
