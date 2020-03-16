<template>
  <div id="app">
    <Navbar/>
    <Loading :loading="loading"/>
    <Logo/>
    <Places :places="places"/>
    <Sidebar>
      <Checkout/>
    </Sidebar>
  </div>
</template>

<script>
import Places from '@/views/Places/index.vue';
import Navbar from '@/layout/Navbar/index.vue';
import Sidebar from '@/layout/Sidebar/index.vue';
import Logo from '@/components/Logo.vue';
import Checkout from '@/views/Checkout/index.vue';
import Loading from '@/views/Loading/index.vue';

const getPlaces = require('./places.json');

export default {
  name: 'app',
  components: {
    Places,
    Loading,
    Navbar,
    Sidebar,
    Checkout,
    Logo,
  },
  data() {
    return {
      places: getPlaces,
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
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
