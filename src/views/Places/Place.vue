<template>
  <circle
    :class="{ 'place': place.active }"
    :r="sizePlace"
    :cx="place.x_coord"
    :cy="place.y_coord"
    :fill="colorPlace"
    @mouseover="changeSize(true)"
    @mouseleave="changeSize(false)"
    @click="selectedPlace"
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
      default: '#DDD',
    },
  },
  computed: {},
  data() {
    return {
      sizePlace: 4,
      colorPlace: '#DDD',
    };
  },
  mounted() {
    this.setParam();
  },
  methods: {
    setParam() {
      if (this.place.active) {
        this.sizePlace = 7;
        this.colorPlace = this.color;
      }
    },
    changeSize(is) {
      if (this.place.active) {
        if (is) this.sizePlace = 10;
        else this.sizePlace = 7;
      }
    },
    selectedPlace() {
      this.$emit('selectedPlace', this.place);
    },
  },
};
</script>

<style scoped lang="scss">
.place {
  cursor: pointer;
}
</style>
