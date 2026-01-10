<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useTypeStore } from '@/stores/pokemonTypes';
import SankeyChart from '@/components/SankeyChart.vue';
import CardContainer from '@/components/CardContainer.vue';

const route = useRoute();
const typeStore = useTypeStore();
const typeName = route.params.type as string;
const type = typeStore.getType(typeName);

// Prepare Sankey data if type exists
let nodes: any[] = [];
let links: any[] = [];
if (type) {
  // Source node is the current type
  nodes = [
    { name: type.name, id: 0 },
    ...type.strongAgainst.map((s: any, i: number) => ({ name: s.type, id: i + 1 })),
    ...type.weakAgainst.map((w: any, i: number) => ({
      name: w.type,
      id: i + 1 + type.strongAgainst.length,
    })),
  ];
  // Links from source to strongAgainst and weakAgainst
  links = [
    ...type.strongAgainst.map((s: any, i: number) => ({
      source: 0,
      target: i + 1,
      value: s.value,
    })),
    ...type.weakAgainst.map((w: any, i: number) => ({
      source: 0,
      target: i + 1 + type.strongAgainst.length,
      value: w.value,
    })),
  ];
}
</script>
<template>
  <main class="page">
    <CardContainer v-if="type">
      <section>
        <h1>{{ type.name }} Type</h1>
        <SankeyChart
          v-if="nodes.length && links.length"
          :nodes="nodes"
          :links="links"
          :width="600"
          :height="300"
        />
      </section>
      <section>
        <h2>Strong Against:</h2>
        <ul>
          <li v-for="s in type.strongAgainst" :key="s.type">{{ s.type }} (x{{ s.value }})</li>
        </ul>
        <h2>Weak Against:</h2>
        <ul>
          <li v-for="w in type.weakAgainst" :key="w.type">{{ w.type }} (x{{ w.value }})</li>
        </ul>
      </section>
    </CardContainer>
    <CardContainer v-else>
      <h1>Type not found</h1>
    </CardContainer>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .page {
    min-height: 100vh;
    width: calc(100vw / 2);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}
</style>
