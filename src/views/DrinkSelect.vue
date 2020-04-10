<template>
  <div class="drink-select">
    <p>Drink selected: {{currentDrink.name}}</p>
    <div class="drink-wrapper">
      <GlassOne/>
      <div class="liquid" v-bind:style="{ height: liquidHeight + '%', maxWidth: liquidMaxWidth + 'px', maxHeight: liquidMaxHeight + 'px' }"></div>
    </div>
    <button v-on:click="testLiquid()" type="button" name="button">test</button>
  </div>
</template>

<script>
import GlassOne from '@/assets/glass2.svg';

export default {
  name: 'DrinkSelect',
  components: {
    GlassOne,
  },
  props: {
    currentDrink: Object,
  },
  data() {
    return {
      liquidMaxWidth: 0,
      liquidMaxHeight: 0,
      liquidHeight: 0,
    };
  },
  methods: {
    testLiquid() {
      console.log(this.liquidHeight);
      if (this.liquidHeight === 0) {
        this.liquidHeight = 30;
      } else {
        this.liquidHeight = 0;
      }
    },
  },
  mounted() {
    this.liquidMaxHeight = document.getElementById('liquidFillArea').getBoundingClientRect().height;
    this.liquidMaxWidth = document.getElementById('liquidFillArea').getBoundingClientRect().width + 10;
  },
};
</script>
