<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import pokeballIcon from '@/assets/pokeball.svg?url';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="home-link">
          <img :src="pokeballIcon" alt="Home" class="pokeball-icon" />
          PokePal
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: calc(100vw / 2);
  max-width: 1200px;
  min-width: 300px;
  margin: 0px auto;
}
.home-link {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin: 0.5rem;
}

nav a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  font-size: 1.2rem;
}

.pokeball-icon {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}
</style>
