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
    },
  },
  mounted() {
    this.registerSVG();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.schame-wrapper {
  position: relative;
}
.scheme {
  height: 95vh;
  width: 100vw;
}
</style>
