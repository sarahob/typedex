<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import logo from '@/assets/TypeDexLogo.svg?url';
import DynamicIcon from './components/DynamicIcon.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="home-link">
        <DynamicIcon height="4em" width="4em">
          <img
            :src="logo"
            alt="TypeDex logo, a pokeball with a magnifying glass to indicate search."
          />
        </DynamicIcon>
        <h1>Type Dex</h1>
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
</style>
