import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persistence = {
  key: "DQC_Vuex",
  paths: [],
  storage: sessionStorage
};
export default new Vuex.Store({
  state: {
    ajaxLoading: false,
    transitionName: "pop-in"
  },
  mutations: {
    setAjaxLoading(state, value) {
      state.ajaxLoading = value;
    },
    setTransitionName(state, value) {
      state.transitionName = value;
    }
  },
  actions: {},
  getters: {},
  modules: {},
  plugins: [createPersistedState(persistence)]
});
