<template>
<div class="wrapper">
  <svg-scheme>
    <g v-for="(level, index) in places.levels" :key="`level-${index}`">
      <circle-place
        :place="place"
        :color="colors[index]"
        v-for="(place, key) in level.seats"
        :key="key"
      />
    </g>
  </svg-scheme>
</div>
</template>

<script>
import Place from './Place.vue';
import Scheme from './Scheme.vue';

export default {
  name: 'places',
  props: {
    places: Object,
  },
  components: {
    'circle-place': Place,
    'svg-scheme': Scheme,
  },
  data() {
    return {
      colors: [
        '#03A9F4',
        '#8BC34A',
        '#DCE775',
        '#FF9800',
        '#FF5722',
        '#f44336',
        '#E91E63',
        '#9C27B0',
        '#673AB7',
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.wrapper {
  background: #f7f7f7;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
