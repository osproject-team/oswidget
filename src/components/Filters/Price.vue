<template>
  <div :class="{ selected: selected, row: true }" @click="toggle">
    <div class="color" :style="{ background: color }"></div>
    <div class="price">{{ price }}</div>
    <img v-if="selected" src="@/assets/images/close.svg" alt="close" class="close">
  </div>
</template>
<script>
export default {
  name: 'Price',
  computed: {
    price() {
      return `${this.prices[0]} +`;
    },
  },
  props: {
    prices: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: '#eee',
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    toggle() {
      this.selected = !this.selected;
    },
  },
};
</script>
<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  height: 27px;
  padding: 0 5px;
  cursor: pointer;
  transition: all .3s;
}
.row:not(.selected) {
  &:hover {
    .color {
      transform: scale(1.1);
    }
  }
}
.color {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  transition: all .3s;
}
.price {
  font-size: 14px;
  font-weight: 500;
  color: $gray;
  margin-left: 10px;
}
.selected {
  background: white;
  margin: 0 5px;
  padding: 0 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  transition: all .3s;
  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
}
.close {
  margin-left: 10px;
}
</style>
