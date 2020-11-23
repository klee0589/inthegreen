import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sport: ""
  },
  mutations: {
    setSport(state, setSport) {
      state.sport = setSport;
    }
  },
  actions: {},
  getters: {
    selectedOption: state => state.sport
  },
  modules: {}
});
