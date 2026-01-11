<template>
  <div :style="{ backgroundColor }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  backgroundColor: { type: String, default: 'transparent' },
});
</script>

<style scoped>
div {
  margin: 0px auto;
  padding: 16px;
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
