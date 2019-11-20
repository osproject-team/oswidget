<template>
  <div id="app">
    <Places :places="places"/>
  </div>
</template>

<script>
import Places from './components/Places/index.vue';

const getPlaces = require('./places.json');

export default {
  name: 'app',
  components: {
    Places,
  },
  data() {
    return {
      places: getPlaces,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
