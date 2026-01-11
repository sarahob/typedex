<template>
  <main>
    <slot />
  </main>
</template>

<style scoped>
main {
  margin: 0px auto;
  width: 100%;
  min-width: var(--layout-min-width);
  max-width: var(--layout-max-width);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
