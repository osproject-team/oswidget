<template>
  <div class="prices">
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
  name: 'Prices',
  components: {
    Price,
  },
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  computed: {},
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
  methods: {},
};
</script>
<style scoped lang="scss">
.prices {
  position: fixed;
  z-index: 1;
  top: $navbarHeight;
  padding: 15px;
  min-width: 50vw;
  margin: 0 auto;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
}
</style>
