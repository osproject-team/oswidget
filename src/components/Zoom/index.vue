<template>
<div class="zoom">
  <button @click="$emit('zoomIn')" class="button-circle zoom__button">+</button>
  <button @click="$emit('zoomOut')" class="button-circle zoom__button">-</button>
</div>
</template>

<script>
export default {
  name: 'Zoom',
};
</script>

<style scoped lang="scss">
.zoom {
  position: fixed;
  top: 45vh;
  left: $m-desktop;
  display: block;

  @include for-tablet {
    left: $m-tablet;
    top: 40vh;
  }

  @include for-phone {
    left: $m-phone;
    top: 35vh;
  }
}

.zoom__button {
  display: block;
  margin: 20px 0;
  line-height: 0;
}
</style>
