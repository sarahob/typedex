<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
import logo from '@/assets/TypeDexLogo.svg?url';
import DynamicIcon from './components/DynamicIcon.vue';
import SearchIcon from '@/assets/searchIcon.svg';

const route = useRoute();
</script>

<template>
  <header>
    <nav>
      <RouterLink v-if="route.name === 'home'" to="/" class="home-link">
        <DynamicIcon height="4em" width="4em">
          <img
            :src="logo"
            alt="TypeDex logo, a pokeball with a magnifying glass to indicate search."
          />
        </DynamicIcon>
        <h1>Type Dex</h1>
      </RouterLink>

      <RouterLink v-if="route.name !== 'home'" class="search-link" to="/">
        <h1>Type Dex</h1>
        <DynamicIcon height="2em" width="2em"> <SearchIcon fill="#fff" /> </DynamicIcon>
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  min-width: var(--layout-min-width);
  max-width: var(--layout-max-width);
  margin: 0px auto;
}
.home-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin: 0.5rem;
}

nav a {
  text-decoration: none;
  font-size: 1.2rem;
}

.search-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0.5rem;
}

.search-link div {
  background-color: var(--highlight-color);
  border-radius: 50%;
  padding: 0.5rem;
  height: 4rem;
  width: 4rem;
}
</style>
