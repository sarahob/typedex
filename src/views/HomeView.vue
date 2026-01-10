<script setup lang="ts">
import Card from '@/components/CardContainer.vue';
import SearchBar from '@/components/SearchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleTypeSelected(type: string) {
  router.push({ name: 'TypePage', params: { type } });
}
</script>

<template>
  <main>
    <Card>
      <p>
        Poke Pal helps you quickly discover Pokémon type matchups for your next battle!<br />
        <strong>Search for any Pokémon type</strong> below to instantly see which types it is
        <span class="type-strong">strong</span> or
        <span class="type-weak">weak</span> against.<br />
        Whether you’re strategizing for a gym, raid, or friendly match, Poke Pal gives you the edge.
      </p>
      <ul class="instructions-list">
        <li>
          Type a Pokémon type (e.g., <em>Fire</em>, <em>Water</em>, <em>Fairy</em>) in the search
          bar.
        </li>
        <li>Press <strong>Search</strong> or hit <kbd>Enter</kbd>.</li>
        <li>See which types are super effective or not very effective against your chosen type.</li>
      </ul>
      <p class="cta-text">Ready to get started? Search a type below!</p>
      <SearchBar @typeSelected="handleTypeSelected" />
    </Card>
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
}

.type-strong {
  color: #388e3c;
  font-weight: bold;
}
.type-weak {
  color: #d32f2f;
  font-weight: bold;
}
.instructions-list {
  margin: 1em 0 2em 1.5em;
}
.cta-text {
  font-size: 1.1em;
  color: #1976d2;
  font-weight: 500;
}
</style>
