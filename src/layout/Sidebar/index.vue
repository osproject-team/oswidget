<template>
  <transition name="sidebar-slide">
    <div v-if="sidebar" class="sidebar">
      <div class="sidebar-wrapper">
        <button class="sidebar-close" @click="toggleSidebar">
          <img src="@/assets/images/arrow-back.svg" alt="back">
        </button>
        <slot/>
      </div>
      <div class="sidebar-fade" @click="toggleSidebar"></div>
    </div>
  </transition>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['sidebar']),
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toogleSidebar');
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  position: fixed;
  display: block;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.sidebar-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  padding: 30px;
  width: 45vw;
  height: 100%;
  max-width: 410px;
  z-index: 1;
  box-shadow: 0px 0 30px rgba(0, 0, 0, 0.4);
}
.sidebar-close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  background: none;
  border: 0;
}
.sidebar-fade {
  position: absolute;
  background: #404040;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
}

.sidebar-slide-enter-active, .sidebar-slide-leave-active {
  .sidebar-fade {
    transition: opacity .5s;
  }
}
.sidebar-slide-enter, .sidebar-slide-leave-to {
  .sidebar-fade {
    opacity: 0;
  }
}

.sidebar-slide-enter-active {
  animation: slide .5s;
}
.sidebar-slide-leave-active {
  animation: slide .5s reverse;
}

@keyframes slide {
  from {
    right: -45vw;
  }

  to {
    right: 0;
  }
}
</style>
