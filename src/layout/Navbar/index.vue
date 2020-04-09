<template>
  <header class="navbar">
    <div class="navbar__text">
      <div class="navbar__title">Swan Lake</div>
      <div class="navbar__subtitle">Sun, Feb 23, 8:30 PM</div>
    </div>
    <button class="navbar__gamburger" @click="toggleSidebar">
      <img src="@/assets/images/gamburger.svg" alt="gamburger">
    </button>
  </header>
</template>
<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toogleSidebar');
    },
  },
};
</script>
<style scoped lang="scss">
.navbar {
  height: $navbarHeight;
  background: linear-gradient(273.63deg, $red 0%, $orange 100%);
  display: flex;
  align-items: center;
  padding: 0 $m-desktop;
  @include for-tablet {
    padding: 0 $m-tablet;
  }
}

.navbar__text {
  color: white;
  flex-grow: 1;
}

.navbar__title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 4px;
}

.navbar__subtitle {
  font-size: 12px;
  font-weight: 500;
}

.navbar__gamburger {
  flex-grow: 0;
  background: none;
  border: none;
  padding: 0;

  @include for-tablet {
    padding: $m-tablet;
    margin: -$m-tablet;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
