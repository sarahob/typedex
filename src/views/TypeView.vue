<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useTypeStore } from '@/stores/pokemonTypes';
import CardContainer from '@/components/CardContainer.vue';
import { computed } from 'vue';

const route = useRoute();
const typeStore = useTypeStore();
const typeName = route.params.type as string;
const type = typeStore.getType(typeName);

const typeIconUrl = computed(() => {
  if (!type) return '';
  return new URL(`../assets/types/${type.name.toLowerCase()}.svg`, import.meta.url).href;
});

const getTypeIconUrl = (typeName: string) => {
  return new URL(`../assets/types/${typeName.toLowerCase()}.svg`, import.meta.url).href;
};
</script>
<template>
  <main class="page">
    <CardContainer v-if="type">
      <section>
        <h1>
          <img :src="typeIconUrl" :alt="type.name" class="type-icon" />
          {{ type.name }}
        </h1>
      </section>
      <section class="details">
        <div>
          <h2>Super Effective Against:</h2>
          <ul class="type-list">
            <li v-for="s in type.strongAgainst" :key="s.type">
              <img :src="getTypeIconUrl(s.type)" :alt="s.type" class="list-type-icon" />
              {{ s.type }}
            </li>
          </ul>
        </div>
        <div>
          <h2>Not Very Effective Against:</h2>
          <ul class="type-list">
            <li v-for="w in type.weakAgainst" :key="w.type">
              <img :src="getTypeIconUrl(w.type)" :alt="w.type" class="list-type-icon" />
              {{ w.type }}
            </li>
          </ul>
        </div>
      </section>
    </CardContainer>
    <CardContainer v-else>
      <h1>Type not found</h1>
    </CardContainer>
  </main>
</template>

<style>
section {
  padding: 0.5rem;
}

h1 {
  padding: 0.5rem;
}

.details {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
}

.details div:nth-last-of-type(1) {
  border-left: 1px solid #ccc;
  padding-left: 4rem;
}

.type-icon {
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.type-list {
  list-style: none;
  padding-left: 0;
}

.type-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.list-type-icon {
  width: 1.5rem;
  height: 1.5rem;
}

@media screen and (max-width: 400px) {
  .details {
    flex-direction: column;
  }

  .details div:nth-last-of-type(1) {
    border-left: none;
    border-top: 1px solid #ccc;
    padding-left: 0;
    padding-top: 1rem;
    margin-top: 1rem;
  }
}
</style>
