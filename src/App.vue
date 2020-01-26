<template>
  <div id="app">
    <Navbar/>
    <Loading :loading="loading"/>
    <Places :places="places"/>
    <Sidebar v-if="false">
      <Checkout/>
    </Sidebar>
  </div>
</template>

<script>
import Places from '@/components/views/Places/index.vue';
import Navbar from '@/components/layout/Navbar/index.vue';
import Sidebar from '@/components/layout/Sidebar/index.vue';
import Checkout from '@/components/views/Checkout/index.vue';
import Loading from '@/components/views/Loading/index.vue';

const getPlaces = require('./places.json');

export default {
  name: 'app',
  components: {
    Places,
    Loading,
    Navbar,
    Sidebar,
    Checkout,
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
#app {
  overflow: hidden;
  max-height: 100vh;
}
</style>
