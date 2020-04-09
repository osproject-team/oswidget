<template>
  <section class="schame-wrapper">
    <div class="schame-button">
      <button class="button button-primary">
        2500$ <span class="partition">|</span> Checkout
        <img src="@/assets/images/next.svg" class="checkout" alt="checkout">
      </button>
    </div>
    <svg ref="schame" xmlns:xlink="http://www.w3.org/1999/xlink" class="scheme" v-on-resize="onResize">
      <slot/>
    </svg>
    <Zoom @zoomIn="zoom(1.2)" @zoomOut="zoom(0.8)"/>
  </section>
</template>

<script>
import svgPanZoom from 'svg-pan-zoom';
import resize from '@/dirictives/resize';
import Zoom from '@/components/Zoom/index.vue';

export default {
  name: 'Scheme',
  directives: {
    'on-resize': resize,
  },
  components: {
    Zoom,
  },
  methods: {
    registerSVG() {
      svgPanZoom(this.$refs.schame, {
        controlIconsEnabled: false,
        zoomScaleSensitivity: 0.2,
        panBy: this.orederPlace,
      });
    },
    orederPlace(place) {
      console.log('place', place);
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
      scheme.zoomBy(0.7);
      scheme.center();
    },
    zoom(val) {
      const scheme = svgPanZoom(this.$refs.schame);
      scheme.zoomBy(val);
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
  position: absolute;
  top: $navbarHeight;
  bottom: 0;
  left: 0;
  right: 0;
}
.scheme {
  height: 100%;
  width: 100%;
}
.schame-button {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.checkout {
  margin-left: 10px;
  transform: translateY(-1px);
}
.partition {
  color: black;
  opacity: .1;
  padding: 0 5px;
}
</style>
