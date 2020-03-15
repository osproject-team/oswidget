<template>
  <header class="navbar">
    <div class="navbar-text">
      <div class="navbar-title">Swan Lake</div>
      <div class="navbar-subtitle">Sun, Feb 23, 8:30 PM</div>
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
.navbar-text {
  color: white;
  flex-grow: 1;
}
.navbar-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
}
.navbar-subtitle {
  font-size: 12px;
  font-weight: 500;
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
