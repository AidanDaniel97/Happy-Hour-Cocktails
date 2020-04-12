<template>
  <div class="card-content">
    <div class="img"></div>
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
