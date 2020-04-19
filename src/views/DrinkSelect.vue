<template>
  <div class="drink-select">
    <h1 class="drink-select-title">{{currentDrink.name}}</h1>
    <div class="drink-wrapper">
      <HurricaneGlass id="glassSVG"/>
      <div class="liquid" v-bind:style="{ height: liquidHeight + 'px',  width: liquidWidth + 'px', maxHeight: liquidMaxHeight + 'px' }"></div>
    </div>
    <div class="drink-steps">
      <div class="step">
        <h1 class="step-title">Test</h1>
      </div>
    </div>
    <!-- <button v-on:click="incrementStep()" type="button" name="button">Next step</button> -->
  </div>
</template>

<script>
import HurricaneGlass from '@/assets/glasses/HurricaneGlass.svg';

export default {
  name: 'DrinkSelect',
  components: {
    HurricaneGlass,
  },
  props: {
    currentDrink: Object,
  },
  data() {
    return {
      liquidMaxHeight: 0,
      liquidHeight: 0,
      liquidWidth: 0,
      currentStep: null,
      stepsFinished: false,
      iceCubesFloating: false,
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
    setLiquidArea() {
      var wrapperBottom = document.querySelector('.drink-wrapper').getBoundingClientRect().bottom;
      var liquidBottom = document.getElementById('liquidFillArea').getBoundingClientRect().bottom;

      document.querySelector('.liquid').style.bottom = `${wrapperBottom - liquidBottom}px`;
      this.liquidMaxHeight = document.getElementById('liquidFillArea').getBoundingClientRect().height;
      this.liquidWidth = document.getElementById('glassSVG').getBoundingClientRect().width - 20; // width, minus 20px padding
    },
    handleCurrentStep() {
      var ingredient = this.currentDrink.steps[this.currentStep].ingredient;
      var measurement = this.currentDrink.steps[this.currentStep].measurement;
      var description = this.currentDrink.steps[this.currentStep].description;
      var ingredientType = this.currentDrink.steps[this.currentStep].ingredient_type;
      var iceCubes = document.querySelectorAll('.ice-cube');

      console.log(ingredientType, ingredient, measurement, description);

      switch (ingredientType) {
        case 'liquid':
          // increase height of liquid
          this.liquidHeight += (this.liquidMaxHeight / 100) * measurement;
          // Float animation on any ice cubes
          if (!this.iceCubesFloating && iceCubes) {
            this.floatIceCubes(iceCubes);
          }
          break;

        case 'ice':
          iceCubes.forEach((iceEl) => iceEl.classList.add('added'));
          break;

        default:
          console.log('No ingredient');
      }
    },
    floatIceCubes(iceCubes) { // used to move ice cubes to the top of the liquid
      var iceCubeGroup = document.getElementById('icecube-group');

      iceCubes.forEach((iceEl) => {
        iceEl.classList.add('floating');
        iceEl.style.animationDelay = `${Math.random(1, 10) + 1}s`;
      });

      this.iceCubesFloating = true;
      iceCubeGroup.style.transform = 'translateY(-15px)';
    },
  },
  mounted() {
    if (!this.currentDrink) {
      this.$router.push('/');
    }

    window.addEventListener('resize', () => {
      this.setLiquidArea();
      console.log('Resized');
    });

    this.setLiquidArea();
  },
};
</script>
