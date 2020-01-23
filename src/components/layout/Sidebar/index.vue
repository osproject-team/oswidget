<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <slot/>
    </div>
    <div class="sidebar-fade"></div>
  </div>
</template>
<style scoped lang="scss">
.sidebar {
  position: fixed;
  display: block;
  top: $navbarHeight;
  bottom: 0;
  left: 0;
  right: 0;
}
.sidebar-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  padding: 30px;
  width: 45vw;
  height: 100%;
  z-index: 1;
}
.sidebar-fade {
  position: absolute;
  background: #404040;
  opacity: .7;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
}
</style>
