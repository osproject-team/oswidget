<template>
  <circle
    :class="{ 'place': place.active }"
    :r="radius"
    :cx="place.x_coord"
    :cy="place.y_coord"
    :fill="color"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    @click="selectPlace"
    ref="place"
  />
</template>

<script>
export default {
  name: 'place',
  props: {
    place: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      default: '#ddd',
    },
  },
  computed: {
    radius() {
      if (this.selected || this.hovered) return 10;
      if (this.place.active) return 7;
      return 4;
    },
  },
  data() {
    return {
      selected: false,
      hovered: false,
    };
  },
  methods: {
    selectPlace() {
      if (!this.selected) this.$emit('selectedPlace', this.place);
      this.selected = !this.selected;
    },
  },
};
</script>

<style scoped lang="scss">
.place {
  cursor: pointer;
}
</style>
