import Vue from 'vue';
import Axios from 'axios';

import App from './App.vue';
import store from './store/index';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
