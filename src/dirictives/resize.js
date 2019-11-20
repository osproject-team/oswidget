import Vue from 'vue';

export default Vue.directive('resize', {
  inserted(el, binding) {
    const f = (evt) => {
      if (binding.value(evt, el)) {
        window.removeEventListener('resize', f);
      }
    };
    window.addEventListener('resize', f);
  },
});
