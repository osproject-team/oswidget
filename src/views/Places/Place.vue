<template>
  <circle
    r="7"
    :cx="place.x_coord"
    :cy="place.y_coord"
    :fill="color"
  />
</template>

<script>
export default {
  name: 'place',
  props: {
    place: Object,
    color: String,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss"></style>
