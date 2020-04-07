<template>
  <div id="app">
    <div class="cocktail-wrapper">
      <div class="inner">
      </div>
        <img src="@/assets/cocktailGlass.png">
        <img src="@/assets/cocktailGlassOverlay.png">
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cocktail-wrapper{
  position: relative;
}

.cocktail-wrapper img{
  position:absolute;
  max-width: 300px;
  height:auto;
  top:0;
  left: 0;
}

.cocktail-wrapper .inner{
  position: absolute;
  width: 400px;
  height: 328px;
  background: red;
  top: 118px;
  left: -2%;
}
</style>
