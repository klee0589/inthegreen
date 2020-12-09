import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { DateTime } from 'luxon'

Vue.use(Vuex)

const apiKey = 'b212997d44e4db738af287daa3faabc8'

export default new Vuex.Store({
  state: {
    sport: '',
    odds: '',
    games: '',
    isGamesLoading: false,
    isOddsLoading: false,
    error: '',
    selectedOption: '',
    lotto: {
      numbers: []
    }
  },
  mutations: {
    SET_ODDS(state, odds) {
      state.odds = odds
    },
    SET_GAME_TYPE(state, games) {
      state.games = games
    },
    SET_GAME_LOADING(state, isGamesLoading) {
      state.isGamesLoading = isGamesLoading
    },
    SET_ODDS_LOADING(state, isOddsLoading) {
      state.isOddsLoading = isOddsLoading
    },
    ADD_LOTTO_NUMBERS(state, lottoNumbers) {
      state.lotto.numbers = lottoNumbers
    }
  },
  actions: {
    setSportType(context, selectedOption) {
      context.commit('SET_ODDS_LOADING', true)
      this.state.selectedOption = selectedOption
      axios
        .get(
          `https://api.the-odds-api.com/v3/odds/?sport=${selectedOption[0]}&dateFormat=iso&oddsFormat=american&region=us`,
          {
            params: {
              api_key: apiKey
            }
          }
        )
        .then((response) => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data
          const games: {
            teams: string
            home: string
            away: string
            time: string
            odds: Array<number>
          }[] = []
          parsedobj.map(
            (obj: {
              teams: string
              commence_time: string
              sites: Array<number>
            }) => {
              const { teams, commence_time, sites } = obj
              games.push({
                teams: teams[0] + ' VS ' + teams[1],
                home: teams[0],
                away: teams[1],
                time: DateTime.fromISO(commence_time, {
                  zone: 'America/New_York'
                }).toLocaleString(DateTime.DATETIME_FULL),
                odds: sites
              })
            }
          )
          context.commit('SET_ODDS', games)
          context.commit('SET_ODDS_LOADING', false)
        })
        .catch((e) => {
          this.state.error = e
          context.commit('SET_ODDS_LOADING', false)
        })
    },
    setGamesForSport(context) {
      context.commit('SET_GAME_LOADING', true)
      axios
        .get(this.state.selectedOption[1])
        .then((response) => {
          context.commit('SET_GAME_TYPE', response.data.events)
          context.commit('SET_GAME_LOADING', false)
        })
        .catch((e) => {
          context.commit('SET_GAME_LOADING', false)
          this.state.error = e
        })
    },
    fetchLottoNumbers(context, lottoNumbers) {
      axios
        .get('https://data.ny.gov/resource/d6yy-54nr.json')
        .then((response) => {
          const numbers = JSON.parse(JSON.stringify(response.data))
          // numbers.map((obj) => {
          //   const splitNum = obj.winning_numbers.split(' ')
          //   const lottoNumbers = {
          //     date: DateTime.fromISO(obj.draw_date, {
          //       zone: "America/New_York"
          //     }).toLocaleString(DateTime),
          //     first: parseInt(splitNum[0]),
          //     seconds: parseInt(splitNum[1]),
          //     third: parseInt(splitNum[2]),
          //     fourth: parseInt(splitNum[3]),
          //     fifth: parseInt(splitNum[4]),
          //     power: parseInt(splitNum[5])
          //   }
          // }
          context.commit('ADD_LOTTO_NUMBERS', numbers)
          // this.isLoading = false
        })
        .catch((e) => {
          // this.errors.push(e)
        })
    }
  },
  getters: {
    getSelectedOption: (state) => state.sport,
    getAllOdds: (state) => state.odds,
    getAllGamesForSport: (state) => state.games
  },
  modules: {}
})
