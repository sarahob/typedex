<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink v-if="route.path !== '/'" to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
