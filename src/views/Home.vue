<template>
  <div class="home">
    <h1 class='is-title'><span>Happy Hour</span></h1>
    <div class="drinks-wrapper">
      <router-link class="drink-card" v-for="drink in drinksList" :key="drink.name" :to="{ name: 'DrinkSelect', params: { currentDrink: drink } }">
        <DrinkCard :currentDrink="drink" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DrinksList from '@/assets/drinks-list.json';
import DrinkCard from '@/components/DrinkCard.vue';

export default {
  name: 'Home',
  components: {
    DrinkCard,
  },
  methods: {
    handleClick() {
      console.log('Click');
    },
  },
  computed: {
    drinksList() {
      return DrinksList;
    },
  },
};
</script>
