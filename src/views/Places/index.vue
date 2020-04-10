<template>
<div class="wrapper">
  <Filters :colors="colors"/>
  <Scheme>
    <g v-for="(level, index) in places.levels" :key="`level-${index}`">
      <Place
        :place="place"
        :color="colors[index]"
        v-for="(place, key) in level.seats"
        :key="key"
        @selectedPlace="setOrder"
      />
    </g>
  </Scheme>
</div>
</template>

<script>
import Place from './Place.vue';
import Scheme from './Scheme.vue';
import Filters from '@/components/Filters/index.vue';

export default {
  name: 'places',
  props: {
    places: {
      type: Object,
      required: true,
    },
  },
  components: {
    Place,
    Scheme,
    Filters,
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
  methods: {
    setOrder(order) {
      console.log(order);
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 79.17%), #FFFFFF;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
