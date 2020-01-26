<template>
<div class="zoom">
  <button @click="$emit('zoomIn')" class="circle-btn zoom-btn">+</button>
  <button @click="$emit('zoomOut')" class="circle-btn zoom-btn">-</button>
</div>
</template>

<script>
export default {
  name: 'Zoom',
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {

  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.zoom {
  position: fixed;
  top: 45vh;
  left: 30px;
  display: block;
}
.zoom-btn {
  display: block;
  margin: 20px 0;
}
</style>
