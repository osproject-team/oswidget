<template>
  <transition name="fade">
    <div v-if="loading" class="loading">
        <div class="loading__wrapper">
          <h2 class="loading__title"><b>OS</b>widget</h2>
          <img src="@/assets/images/loading.svg" class="loading__loader" alt="">
          <div class="loading__message">{{ message }}</div>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: 'Seats loading...',
    },
  },
};
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(309.99deg, $red 0.63%, $orange 76.35%), #FFFFFF;
  z-index: 100;
  text-align: center;
}
.loading__title {
  color: white;
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 25vh;
}
.loading__message {
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-top: 50px;
}
.loading__wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10vh;
}
.loading__loader {
  max-height: 70px;
  animation-name: rotation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotation {
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(360deg);
  }
}
</style>
