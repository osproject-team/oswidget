<template>
  <header class="navbar">
    <div class="navbar-title">
      Checkout
    </div>
    <button class="navbar-gamburger" @click="toggleSidebar">
      <img src="@/assets/images/gamburger.svg" alt="gamburger">
    </button>
  </header>
</template>
<script>
export default {
  name: 'Navbar',
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toogleSidebar');
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.navbar {
  height: $navbarHeight;
  background: linear-gradient(273.63deg, $red 0%, $orange 100%);
  display: flex;
  align-items: center;
  padding: 0 30px;
}
.navbar-title {
  font-weight: bold;
  color: white;
  font-size: 18px;
  flex-grow: 1;
}
.navbar-gamburger {
  flex-grow: 0;
  background: none;
  border: none;
  &:hover {
    opacity: 0.8;
  }
}
</style>
