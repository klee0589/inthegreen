import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sport: "",
    odds: ""
  },
  mutations: {
    setSport(state, setSport) {
      state.sport = setSport;
    },
    setOdds(state, odds) {
      state.odds = odds;
    }
  },
  actions: {},
  getters: {
    selectedOption: state => state.sport,
    getAllOdds: state => state.odds
  },
  modules: {}
});
