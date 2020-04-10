<template>
  <div class="drink-select">
    <p>Drink selected: {{currentDrink.name}}</p>
    <div class="drink-wrapper">
      <GlassOne/>
      <div class="liquid" v-bind:style="{ height: liquidHeight + 'px', maxWidth: liquidMaxWidth + 'px', maxHeight: liquidMaxHeight + 'px' }"></div>
    </div>
    <button v-on:click="incrementStep()" type="button" name="button">Next step</button>
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
      currentStep: null,
      stepsFinished: false,
    };
  },
  methods: {
    incrementStep() {
      if (!this.stepsFinished) {
        if (this.currentStep == null) {
          this.currentStep = 0;
        } else {
          this.currentStep += 1;
        }

        if (this.currentStep >= this.currentDrink.steps.length) {
          this.stepsFinished = true;
        }

        this.handleCurrentStep();
      }
    },
    handleCurrentStep() {
      var ingredient = this.currentDrink.steps[this.currentStep].ingredient;
      var measurement = this.currentDrink.steps[this.currentStep].measurement;
      var description = this.currentDrink.steps[this.currentStep].description;

      this.liquidHeight += (this.liquidMaxHeight / 100) * measurement;
      console.log((this.liquidMaxHeight / 100) * measurement);

      console.log(ingredient, measurement, description);
    },
  },
  mounted() {
    if (!this.currentDrink) {
      this.$router.push('/');
    }
    this.liquidMaxHeight = document.getElementById('liquidFillArea').getBoundingClientRect().height;
    this.liquidMaxWidth = document.getElementById('liquidFillArea').getBoundingClientRect().width + 10;
  },
};
</script>
