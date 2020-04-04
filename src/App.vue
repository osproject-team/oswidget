<template>
  <div id="app">
    <Navbar/>
    <Loading :loading="loading"/>
    <Logo/>
    <Places v-if="places" :places="places"/>
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
      places: null,
      loading: true,
    };
  },
  mounted() {
    this.$axios
      .get('examples/places.json')
      .then((response) => {
        this.places = response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style lang="scss">
#app {
  overflow: hidden;
  max-height: 100vh;
  b {
    font-weight: bold;
  }
}
</style>
