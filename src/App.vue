<template>
  <div id="app">
    <Loading :loading="loading"/>
    <Places :places="places"/>
  </div>
</template>

<script>
import Places from './components/pages/Places/index.vue';
import Loading from './components/pages/Loading/index.vue';

const getPlaces = require('./places.json');

export default {
  name: 'app',
  components: {
    Places,
    Loading,
  },
  data() {
    return {
      places: getPlaces,
      loading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = true;
    }, 3000);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  color: #4A4A4A;
}
</style>
