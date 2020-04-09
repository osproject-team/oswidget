<template>
  <transition name="sidebar-slide">
    <div v-if="sidebar" class="sidebar">
      <div class="sidebar__wrapper">
        <button class="sidebar__close" @click="toggleSidebar">
          <img src="@/assets/images/arrow-back.svg" alt="back">
        </button>
        <slot/>
      </div>
      <div class="sidebar__fade" @click="toggleSidebar"></div>
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
    z-index: $sidebarIndex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .sidebar__wrapper {
    position: absolute;
    top: 0;
    right: 0;
    background: $gray-light;
    width: 45vw;
    height: 100%;
    max-width: 410px;
    z-index: 1;
    box-shadow: 0px 0 30px rgba(0, 0, 0, 0.4);

    @include for-tablet {
      width: 60vw;
      max-width: 100%;
    }

    @include for-phone {
      width: 100vw;
    }
  }

  .sidebar__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: $m-desktop;
    background: none;
    border: 0;
    overflow: hidden;

    @include for-tablet {
      padding: $m-tablet;
    }

    @include for-phone {
      padding: $m-phone;
    }
  }

  .sidebar__fade {
    position: absolute;
    background: #404040;
    opacity: 0.7;
    width: 100%;
    height: 100%;
    z-index: 0;
    cursor: pointer;
    transition: opacity .5s;
  }

  .sidebar-slide-enter-to {
    right: 0;
    transition: all .5s;
    .sidebar__fade {
      opacity: .7;
    }
  }

  .sidebar-slide-leave-active,
  .sidebar-slide-enter {
    transition: all .5s;
    right: -45vw;

    @include for-tablet {
      right: -60vw;
    }

    @include for-phone {
      right: -100vw;
    }

    .sidebar__fade {
      opacity: 0;
    }
  }
</style>
