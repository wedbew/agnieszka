import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import { ObserveVisibility } from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
