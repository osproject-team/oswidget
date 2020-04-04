<template>
  <div class="checkout">
    <div class="checkout__wrapper">
      <div class="checkout__age">12+</div>
      <div class="checkout__title">
        Swan Lake
      </div>
      <div class="checkout__subtitle">
        <div>Sun, Feb 23, 8:30 PM</div>
        <div>Bolshoi Theater</div>
      </div>
      <Tickets />
      <a href="#" class="checkout__link" target="_blank" rel="noopener noreferrer">
        Information about delivery of tickets
      </a>
      <Control />
    </div>
  </div>
</template>
<script>
import Tickets from './Tickets.vue';
import Control from './Control.vue';

export default {
  name: 'Checkout',
  components: {
    Tickets,
    Control,
  },
};
</script>
<style scoped lang="scss">
.checkout {
  display: block;
  color: $gray;
  overflow-y: scroll;
  height: 100%;
}

.checkout__wrapper {
  padding: 30px;
  padding-bottom: 220px;
}

.checkout__age {
  font-size: 12px;
  margin-bottom: 7px;
  font-weight: 500;
}

.checkout__title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 15px;
}

.checkout__subtitle {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
}

.checkout__link {
  display: block;
  font-size: 14px;
  color: $main;
  text-decoration: none;
  text-align: center;
}
</style>
