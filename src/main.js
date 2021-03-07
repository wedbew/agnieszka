import Vue from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTyperPlugin from 'vue-typer';
import VueScrollactive from 'vue-scrollactive';
import VModal from 'vue-js-modal/dist/index.nocss';
import VueKinesis from 'vue-kinesis';
import 'vue-js-modal/dist/styles.css';
// import VueScrollTo from 'vue-scrollto';
// import { ObserveVisibility } from 'vue-observe-visibility';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueTyperPlugin);
Vue.use(VueScrollactive);
Vue.use(VModal);
Vue.use(VueKinesis);
// Vue.use(VueScrollTo);
// Vue.directive('observe-visibility', ObserveVisibility);

new Vue({
  router,
  store,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount('#app');
