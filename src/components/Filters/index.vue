<template>
  <div class="filters">
    <Price
      v-for="(item, index) in prices"
      :key="index"
      :color="colors[index]"
      :prices="item"
    />
  </div>
</template>
<script>
import Price from './Price.vue';

export default {
  name: 'Filters',
  components: {
    Price,
  },
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      prices: [
        [1500, 1750],
        [2000, 3000, 4000],
        [5000, 5500, 6000],
        [6500],
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.filters {
  position: absolute;
  z-index: 1;
  top: $navbarHeight;
  padding: 15px;
  margin: 0 auto;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);

  @include for-tablet {
    left: 0;
    right: 0;
    overflow-x: scroll;
  }
}
</style>
