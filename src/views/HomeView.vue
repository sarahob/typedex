<script setup lang="ts">
import Card from '@/components/CardContainer.vue';
import Layout from '@/components/LayoutContainer.vue';

import SearchBar from '@/components/SearchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleTypeSelected(type: string | null) {
  if (!type) return;
  router.push({ name: 'TypePage', params: { type } });
}
</script>

<template>
  <Layout>
    <Card background-color="var(--secondary-red)">
      <p>
        Pokemon Companion App to help you quickly discover Pokémon type match-ups for your next
        battle!
      </p>
    </Card>
    <SearchBar @typeSelected="handleTypeSelected" />
  </Layout>
</template>

<style scoped>
p {
  width: 80%;
  margin: 0px auto;
  text-align: center;
  font-size: 1rem;
  color: var(--light-text);
}
</style>
