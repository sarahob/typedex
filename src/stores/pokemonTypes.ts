import { defineStore } from 'pinia';

export const useTypeStore = defineStore('pokemonTypesStore', {
  state: () => ({
    types: [
      {
        name: 'Normal',
        strongAgainst: [],
        weakAgainst: [
          { type: 'Rock', value: 0.5 },
          { type: 'Ghost', value: 0 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Fire',
        strongAgainst: [
          { type: 'Grass', value: 2 },
          { type: 'Ice', value: 2 },
          { type: 'Bug', value: 2 },
          { type: 'Steel', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Water', value: 0.5 },
          { type: 'Rock', value: 0.5 },
          { type: 'Dragon', value: 0.5 },
        ],
      },
      {
        name: 'Water',
        strongAgainst: [
          { type: 'Fire', value: 2 },
          { type: 'Ground', value: 2 },
          { type: 'Rock', value: 2 },
        ],
        weakAgainst: [
          { type: 'Water', value: 0.5 },
          { type: 'Grass', value: 0.5 },
          { type: 'Dragon', value: 0.5 },
        ],
      },
      {
        name: 'Electric',
        strongAgainst: [
          { type: 'Water', value: 2 },
          { type: 'Flying', value: 2 },
        ],
        weakAgainst: [
          { type: 'Electric', value: 0.5 },
          { type: 'Ground', value: 0 },
          { type: 'Grass', value: 0.5 },
          { type: 'Dragon', value: 0.5 },
        ],
      },
      {
        name: 'Grass',
        strongAgainst: [
          { type: 'Water', value: 2 },
          { type: 'Ground', value: 2 },
          { type: 'Rock', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Grass', value: 0.5 },
          { type: 'Poison', value: 0.5 },
          { type: 'Flying', value: 0.5 },
          { type: 'Bug', value: 0.5 },
          { type: 'Dragon', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Ice',
        strongAgainst: [
          { type: 'Grass', value: 2 },
          { type: 'Ground', value: 2 },
          { type: 'Flying', value: 2 },
          { type: 'Dragon', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Water', value: 0.5 },
          { type: 'Ice', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Fighting',
        strongAgainst: [
          { type: 'Normal', value: 2 },
          { type: 'Ice', value: 2 },
          { type: 'Rock', value: 2 },
          { type: 'Dark', value: 2 },
          { type: 'Steel', value: 2 },
        ],
        weakAgainst: [
          { type: 'Poison', value: 0.5 },
          { type: 'Flying', value: 0.5 },
          { type: 'Psychic', value: 0.5 },
          { type: 'Bug', value: 0.5 },
          { type: 'Ghost', value: 0 },
          { type: 'Fairy', value: 0.5 },
        ],
      },
      {
        name: 'Poison',
        strongAgainst: [
          { type: 'Grass', value: 2 },
          { type: 'Fairy', value: 2 },
        ],
        weakAgainst: [
          { type: 'Poison', value: 0.5 },
          { type: 'Ground', value: 0.5 },
          { type: 'Rock', value: 0.5 },
          { type: 'Ghost', value: 0.5 },
          { type: 'Steel', value: 0 },
        ],
      },
      {
        name: 'Ground',
        strongAgainst: [
          { type: 'Fire', value: 2 },
          { type: 'Electric', value: 2 },
          { type: 'Poison', value: 2 },
          { type: 'Rock', value: 2 },
          { type: 'Steel', value: 2 },
        ],
        weakAgainst: [
          { type: 'Grass', value: 0.5 },
          { type: 'Ice', value: 0.5 },
          { type: 'Bug', value: 0.5 },
          { type: 'Flying', value: 0 },
        ],
      },
      {
        name: 'Flying',
        strongAgainst: [
          { type: 'Grass', value: 2 },
          { type: 'Fighting', value: 2 },
          { type: 'Bug', value: 2 },
        ],
        weakAgainst: [
          { type: 'Electric', value: 0.5 },
          { type: 'Rock', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Psychic',
        strongAgainst: [
          { type: 'Fighting', value: 2 },
          { type: 'Poison', value: 2 },
        ],
        weakAgainst: [
          { type: 'Psychic', value: 0.5 },
          { type: 'Steel', value: 0.5 },
          { type: 'Dark', value: 0 },
        ],
      },
      {
        name: 'Bug',
        strongAgainst: [
          { type: 'Grass', value: 2 },
          { type: 'Psychic', value: 2 },
          { type: 'Dark', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Fighting', value: 0.5 },
          { type: 'Poison', value: 0.5 },
          { type: 'Flying', value: 0.5 },
          { type: 'Ghost', value: 0.5 },
          { type: 'Steel', value: 0.5 },
          { type: 'Fairy', value: 0.5 },
        ],
      },
      {
        name: 'Rock',
        strongAgainst: [
          { type: 'Fire', value: 2 },
          { type: 'Ice', value: 2 },
          { type: 'Flying', value: 2 },
          { type: 'Bug', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fighting', value: 0.5 },
          { type: 'Ground', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Ghost',
        strongAgainst: [
          { type: 'Psychic', value: 2 },
          { type: 'Ghost', value: 2 },
        ],
        weakAgainst: [
          { type: 'Dark', value: 0.5 },
          { type: 'Normal', value: 0 },
        ],
      },
      {
        name: 'Dragon',
        strongAgainst: [{ type: 'Dragon', value: 2 }],
        weakAgainst: [
          { type: 'Steel', value: 0.5 },
          { type: 'Fairy', value: 0 },
        ],
      },
      {
        name: 'Dark',
        strongAgainst: [
          { type: 'Psychic', value: 2 },
          { type: 'Ghost', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fighting', value: 0.5 },
          { type: 'Dark', value: 0.5 },
          { type: 'Fairy', value: 0.5 },
        ],
      },
      {
        name: 'Steel',
        strongAgainst: [
          { type: 'Ice', value: 2 },
          { type: 'Rock', value: 2 },
          { type: 'Fairy', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Water', value: 0.5 },
          { type: 'Electric', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
      {
        name: 'Fairy',
        strongAgainst: [
          { type: 'Fighting', value: 2 },
          { type: 'Dragon', value: 2 },
          { type: 'Dark', value: 2 },
        ],
        weakAgainst: [
          { type: 'Fire', value: 0.5 },
          { type: 'Poison', value: 0.5 },
          { type: 'Steel', value: 0.5 },
        ],
      },
    ],
  }),
  getters: {
    getType: (state) => (name: string) => state.types.find((t) => t.name === name),
  },
});
