import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { DateTime } from "luxon";

Vue.use(Vuex);

const apiKey = "b212997d44e4db738af287daa3faabc8";

export default new Vuex.Store({
  state: {
    sport: "",
    odds: "",
    games: "",
    isLoading: false,
    error: "",
    selectedOption: ""
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
    },
    isLoading(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    setSport(context, selectedOption) {
      context.commit("isLoading", true);
      this.state.selectedOption = selectedOption;
      axios
        .get(
          `https://api.the-odds-api.com/v3/odds/?sport=${selectedOption[0]}&dateFormat=iso&oddsFormat=american&region=us`,
          {
            params: {
              api_key: apiKey
            }
          }
        )
        .then(response => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
          const games: {
            teams: string;
            home: any;
            away: any;
            time: any;
            odds: any;
          }[] = [];
          parsedobj.map(
            (obj: { teams: any; commence_time: any; sites: any }) => {
              const { teams, commence_time, sites } = obj;
              games.push({
                teams: teams[0] + " VS " + teams[1],
                home: teams[0],
                away: teams[1],
                time: DateTime.fromISO(commence_time, {
                  zone: "America/New_York"
                }).toLocaleString(DateTime.DATETIME_FULL),
                odds: sites
              });
            }
          );
          context.commit("setOdds", games);
          context.commit("isLoading", false);
        })
        .catch(e => {
          this.state.error = e;
          context.commit("isLoading", false);
        });
    },
    setOdds(context) {
      context.commit("setOdds");
    },
    setGamesForSport(context) {
      axios
        .get(this.state.selectedOption[1])
        .then(response => {
          context.commit("setGamesForSport", response.data.events);
          context.commit("isLoading", false);
        })
        .catch(e => {
          context.commit("isLoading", false);
          this.state.error = e;
        });
    }
  },
  getters: {
    selectedOption: state => state.sport,
    getAllOdds: state => state.odds,
    getAllGamesForSport: state => state.games,
    isLoading: state => state.isLoading
  },
  modules: {}
});
