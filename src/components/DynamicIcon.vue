<template>
  <div class="resizable" :style="{ width, height }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: { type: String, default: '3em' },
  height: { type: String, default: '3em' },
});
</script>

<style scoped>
.resizable {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.resizable > * {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}
</style>
