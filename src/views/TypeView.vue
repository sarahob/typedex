<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useTypeStore } from '@/stores/pokemonTypes';
import CardContainer from '@/components/CardContainer.vue';
import LayoutContainer from '@/components/LayoutContainer.vue';
import DynamicIcon from '@/components/DynamicIcon.vue';
import EffectiveIcon from '@/assets/effective.svg';
import NotVeryEffectiveIcon from '@/assets/weak.svg';

const route = useRoute();
const typeStore = useTypeStore();
const typeName = route.params.type as string;
const type = typeStore.getType(typeName);

const getTypeIconUrl = (typeName: string) => {
  return new URL(`../assets/type-icons/${typeName.toLowerCase()}.svg`, import.meta.url).href;
};
</script>
<template>
  <LayoutContainer>
    <CardContainer v-if="type" background-color="transparent">
      <div class="type-header">
        <DynamicIcon :height="'4rem'" :width="'4rem'">
          <img :src="getTypeIconUrl(type.name)" :alt="type.name" />
        </DynamicIcon>
        <h1>{{ type.name }}</h1>
      </div>
      <CardContainer background-color="var(--super-effective-color-light)">
        <section>
          <div class="effect">
            <div class="icon-badge super-effective">
              <DynamicIcon :height="'3rem'" :width="'3rem'">
                <EffectiveIcon class="super-effective-icon" aria-label="super effective" />
              </DynamicIcon>
            </div>
            <h2>Super Effective</h2>
          </div>
          <div class="effect-list">
            <ul class="type-list">
              <li v-for="s in type.strongAgainst" :key="s.type">
                <span class="type-name">{{ s.type }}</span>
                <span class="type-value">{{ `x${s.value}` }}</span>
                <DynamicIcon :height="'2rem'" :width="'2rem'">
                  <img :src="getTypeIconUrl(s.type)" :alt="s.type" class="list-type-icon" />
                </DynamicIcon>
              </li>
            </ul>
          </div>
        </section>
      </CardContainer>
      <CardContainer background-color="var(--not-very-effective-color-light)">
        <section>
          <div class="effect">
            <div class="icon-badge not-very-effective">
              <DynamicIcon :height="'3rem'" :width="'3rem'">
                <NotVeryEffectiveIcon
                  class="not-very-effective-icon"
                  aria-label="not very effective"
                />
              </DynamicIcon>
            </div>
            <h2>Not Very Effective</h2>
          </div>
          <div class="effect-list">
            <ul class="type-list">
              <li v-for="s in type.weakAgainst" :key="s.type">
                <span class="type-name">{{ s.type }}</span>
                <span class="type-value">{{ `x${s.value}` }}</span>
                <DynamicIcon :height="'2rem'" :width="'2rem'">
                  <img :src="getTypeIconUrl(s.type)" :alt="s.type" class="list-type-icon" />
                </DynamicIcon>
              </li>
            </ul>
          </div>
        </section>
      </CardContainer>
    </CardContainer>
    <CardContainer v-else>
      <h1>Type not found</h1>
    </CardContainer>
  </LayoutContainer>
</template>

<style>
:root {
  --super-effective-color-strong: #439837;
  --super-effective-color-light: #92d589;
  --not-very-effective-color-strong: #ed5646;
  --not-very-effective-color-light: #ff978c;
}

section {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  align-items: center;
}

.effect {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.icon-badge {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.super-effective {
  background-color: var(--super-effective-color-strong);
}

.not-very-effective {
  background-color: var(--not-very-effective-color-strong);
}

.super-effective-icon path {
  stroke: #fbfdfd;
}

.not-very-effective-icon path {
  stroke: #fbfdfd;
  fill: #fbfdfd;
}

section {
  padding: 0.5rem;
}

h1 {
  padding: 0.5rem;
}

h2 {
  font-weight: 800;
  color: var(--text-primary-color-contrast);
}

.type-list {
  list-style: none;
  padding-left: 0;
  font-size: 1.4rem;
  color: var(--text-primary-color-contrast);
  display: inline-grid;
  grid-template-rows: auto auto auto;
}

.type-list li {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-items: start;
  justify-items: center;
  gap: 1.6rem;
  margin-bottom: 0.5rem;
}

.list-type-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.type-header {
  margin: 0px auto;
  background-color: #efeeee;
  border-radius: 20px;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>
