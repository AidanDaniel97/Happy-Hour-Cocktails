<template>
  <div class="drink-select">
    <p>Drink selected: {{currentDrink.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'DrinkSelect',
  props: {
    currentDrink: Object,
  },
};
</script>
