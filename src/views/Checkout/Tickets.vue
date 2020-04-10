<template>
  <div :class="{ 'tickets': true, 'tickets-active': active }" :style="setHeight">
    <div class="tickets__title" :style="{ height: `${titleHeight}px` }" @click="toggle">
      <div class="tickets__total">
        Total <b>3 900 ₽</b>
      </div>
      <div class="tickets__toggle">
        <img src="@/assets/images/kebab.svg" alt="toggle">
      </div>
    </div>
    <div class="tickets__list">
      <div
        class="tickets__list-item"
        :style="{ height: `${itemHeight}px` }"
        v-for="(item, index) in tickets"
        :key="index"
      >
          <div class="tickets__list-place">
            <span>Row 1, Seat 10</span>
            <sup>Balcony</sup>
          </div>
          <div class="tickets__list-price">
            900 ₽
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tickets',
  computed: {
    setHeight() {
      const height = this.tickets.length * (this.titleHeight + this.itemHeight);
      return {
        maxHeight: `${this.active ? height : this.titleHeight}px`,
      };
    },
  },
  data() {
    return {
      active: false,
      itemHeight: 75,
      titleHeight: 60,
      tickets: [
        {
          id: 1,
          label: 'Title',
          size: 64,
        },
        {
          id: 2,
          label: 'Foo',
          size: 32,
        },
        {
          id: 3,
          label: 'Bar',
          size: 32,
        },
        {
          id: 4,
          label: 'Bar',
          size: 32,
        },
        {
          id: 5,
          label: 'Bar',
          size: 32,
        },
        {
          id: 6,
          label: 'Bar',
          size: 32,
        },
        {
          id: 7,
          label: 'Bar',
          size: 32,
        },
        {
          id: 8,
          label: 'Bar',
          size: 32,
        },
        {
          id: 9,
          label: 'Bar',
          size: 32,
        },
        {
          id: 10,
          label: 'Bar',
          size: 32,
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>
<style scoped lang="scss">
  .tickets {
    margin: $m-desktop 0;
    padding: 0 $m-desktop;
    min-height: 15px;
    background: white;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.10);
    border-radius: 10px;
    transition: all .5s;
    overflow: hidden;

    @include for-tablet {
      margin: $m-tablet 0;
      padding: 0 $m-tablet;
    }
  }
  .tickets-active {
    padding-bottom: 0;
  }
  .tickets__title {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .tickets__total {
    flex-grow: 1;
    font-weight: 500;
  }
  .tickets__toggle {
    flex-grow: 0;
    padding: 10px;
    margin: -10px;
    transform: translateY(-1px);
  }
  .tickets__list {
    display: flex;
    flex-direction: column;
  }
  .tickets__list-item {
    display: flex;
    margin: 0 -30px;
    padding: 0 30px;
    border-bottom: 1px solid #E5E5E5;
    &:last-child {
      border: 0;
    }
  }
  .tickets__list-place {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    sup {
      display: block;
      font-weight: 300;
      margin-top: 7px;
      font-size: 12px;
    }
  }
  .tickets__list-price {
    flex-grow: 0;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
</style>
