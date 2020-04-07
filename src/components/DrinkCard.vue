<template>
  <div class="drink-card">
    <h1>{{currentDrink.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'DrinkCard',
  props: {
    currentDrink: Object,
  },
};
</script>
