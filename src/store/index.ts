import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sport: "",
    odds: "",
    games: ""
  },
  mutations: {
    setSport(state, setSport) {
      state.sport = setSport;
    },
    setOdds(state, odds) {
      state.odds = odds;
    },
    setGamesForSport(state, games) {
      state.games = games;
    }
  },
  actions: {
    setSport(context) {
      context.commit("setSport");
    },
    setOdds(context) {
      context.commit("setOdds");
    },
    setGamesForSport(context) {
      context.commit("setGamesForSport");
    }
  },
  getters: {
    selectedOption: state => state.sport,
    getAllOdds: state => state.odds,
    getAllGamesForSport: state => state.games
  },
  modules: {}
});
