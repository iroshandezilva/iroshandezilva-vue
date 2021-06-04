<template>
  <div id="app">
    <div>
      <Navigation></Navigation>
    </div>

    <router-view>

    </router-view>
  </div>
</template>

<script>
import Navigation from './components/Nav'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navigation,
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
}
</style>
