<script setup lang="ts">
import DynamicIcon from '@/components/DynamicIcon.vue';
import NotFound from '@/assets/NotFound.svg';
import CardContainer from '@/components/CardContainer.vue';
import LayoutContainer from '@/components/LayoutContainer.vue';
</script>

<template>
  <LayoutContainer>
    <CardContainer background-color="var(--highlight-color)" class="error-container">
      <h1>404 - Page Not Found</h1>
      <DynamicIcon :height="'6rem'" :width="'6rem'">
        <NotFound aria-label="404 not found illustration" />
      </DynamicIcon>
      <p>Sorry, the page you are looking for does not exist.</p>
      <RouterLink to="/">Go back to Search</RouterLink>
    </CardContainer>
  </LayoutContainer>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
}
</style>
