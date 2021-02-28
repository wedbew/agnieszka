import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTab: '',
    tabs: ['Home', 'About', 'Contact', 'Blog'],
  },
  mutations: {
    changeCurrentTab(state, tab) {
      state.currentTab = tab;
    },
  },
  actions: {
  },
  modules: {
  },
});
