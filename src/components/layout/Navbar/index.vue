<template>
  <header class="navbar">
    <div class="navbar-title">
      Checkout
    </div>
    <div class="navbar-gamburger">
      <a href="#">
        <img src="@/assets/images/gamburger.svg" alt="gamburger">
      </a>
    </div>
  </header>
</template>
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
}
</style>
