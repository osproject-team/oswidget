<template>
  <transition name="fade">
    <div v-if="loading" class="loading">
      <h3 class="loading-title"><b>OS</b>widget</h3>
      <div class="loading-content">
        <div class="loading-loader">
          <img src="@/assets/images/loading.svg" class="loading-image" alt="">
        </div>
        <span class="loading-text">Seats loading...</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'place',
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(309.99deg, $red 0.63%, $orange 76.35%), #FFFFFF;
  z-index: 100;
  text-align: center;
}
.loading-title {
  color: white;
  font-size: 45px;
  font-weight: 500;
  margin-top: 155px;
  margin-bottom: 155px;
  b {
    font-weight: 700;
  }
}
.loading-text {
  color: white;
  font-size: 20px;
  font-weight: 700;
}
.loading-loader {
  position: relative;
  margin-bottom: 43px;
}
.loading-image {
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
