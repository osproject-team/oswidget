<template>
<div class="zoom">
  <button @click="$emit('zoomIn')" class="button-circle zoom__button">+</button>
  <button @click="$emit('zoomOut')" class="button-circle zoom__button">-</button>
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
.zoom__button {
  display: block;
  margin: 20px 0;
  line-height: 0;
  font-size: 30px;
}
</style>
