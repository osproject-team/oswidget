<template>
  <div :class="['sidebar', { 'sidebar-close': !sidebar }]">
    <div class="sidebar-wrapper">
      <slot/>
    </div>
    <div class="sidebar-fade" @click="toggleSidebar"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  props: {},
  components: {},
  computed: {
    ...mapGetters(['sidebar']),
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('app/toogleSidebar');
    },
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.sidebar {
  position: fixed;
  display: block;
  top: $navbarHeight;
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
  z-index: 1;
  animation-duration: .5s;
  animation-name: slideIn;
}
.sidebar-fade {
  position: absolute;
  background: #404040;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  z-index: 0;
  cursor: pointer;
  animation-duration: .5s;
  animation-name: fadeIn;
}

.sidebar-close {
  display: none;
  .sidebar-wrapper {
    animation-duration: .5s;
    animation-name: slideOut;
  }
  .sidebar-fade {
    animation-duration: .5s;
    animation-name: fadeOut;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}

@keyframes slideIn {
  from {
    right: -45vw;
  }

  to {
    right: 0;
  }
}

@keyframes fadeOut {
  from {
    opacity: 0.7;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideOut {
  from {
    right: 0;
  }

  to {
    right: -45vw;
  }
}

</style>
