<template>
  <div class="home">
    <div class="drinks-wrapper">

      <router-link v-for="drink in drinksList" :key="drink.name" :to="{ name: 'DrinkSelect', params: { currentDrink: drink } }">
        <DrinkCard :currentDrink="drink" />
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DrinkCard from '@/components/DrinkCard.vue';

export default {
  name: 'Home',
  components: {
    DrinkCard,
  },
  data() {
    return {
      drinksList: [
        {
          name: 'Mojito',
          description: 'A mojito',
          steps: [
            {
              ingredient: 'Mint',
              description: 'Add some mint',
              measurement: 0,
              ingredient_type: 'leaves',
            },
            {
              ingredient: 'Rum',
              description: 'Add some rum',
              measurement: 50,
              ingredient_type: 'liquid',
            },
            {
              ingredient: 'Soda Water',
              description: 'Add soda water to taste',
              measurement: 50,
              ingredient_type: 'liquid',
            },
          ],
        },
        { name: 'Pina Colada', desc: 'A random drink test' },
        { name: 'Screwdriver', desc: 'Another drink test' },
      ],
    };
  },
  methods: {
    handleClick() {
      console.log('Click');
    },
  },
};
</script>
