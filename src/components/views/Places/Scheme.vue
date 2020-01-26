<template>
<section class="schame-wrapper">
  <svg ref="schame" xmlns:xlink="http://www.w3.org/1999/xlink" class="scheme" v-on-resize="onResize">
    <slot/>
  </svg>
</section>
</template>

<script>
import svgPanZoom from 'svg-pan-zoom';
import resize from '@/dirictives/resize';

export default {
  name: 'Scheme',
  props: {},
  directives: {
    'on-resize': resize,
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    registerSVG() {
      svgPanZoom(this.$refs.schame, {
        controlIconsEnabled: true,
        zoomScaleSensitivity: 0.2,
      });
    },
    onResize() {
      const scheme = svgPanZoom(this.$refs.schame);
      scheme.resize();
      scheme.fit();
      scheme.center();
      this.addPadding();
    },
    addPadding() {
      const scheme = svgPanZoom(this.$refs.schame);
      scheme.zoomBy(0.9);
      scheme.center();
    },
  },
  mounted() {
    this.registerSVG();
    this.addPadding();
  },
};
</script>

<style scoped lang="scss">
.schame-wrapper {
  position: fixed;
  top: $navbarHeight;
  bottom: 0;
  left: 0;
  right: 0;
}
.scheme {
  height: 100%;
  width: 100%;
}
</style>
