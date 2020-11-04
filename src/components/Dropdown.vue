<template>
  <div id="dropdown">
    <b-form-select v-model="selected" :options="gameTypes"></b-form-select>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col
          cols="12"
          sm="3"
          med="3"
          v-for="game in games"
          :key="game.home_team"
        >
          <GameInfo :game="game" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";
import GameInfo from "./GameInfo.vue";

export default {
  data() {
    return {
      selected: null,
      games: [],
      gameTypes: [],
      fields: [
        { key: "teams" },
        { key: "odds", sortable: true },
        { key: "time", formatter: "formatDateAssigned", sortable: true }
      ],
      show: true
    };
  },
  components: {
    GameInfo
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime.DATETIME_FULL);
    }
  },
  watch: {
    selected: function() {
      const apiKey = "799dd1f2c9a88d205fc9307305051e73";
      axios
        .get(
          `https://api.the-odds-api.com/v3/odds/?sport=${this.selected}&dateFormat=iso&oddsFormat=american&region=us`,
          {
            params: {
              api_key: apiKey
            }
          }
        )
        .then(response => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
          this.games = [];
          parsedobj.map(obj => {
            const { teams, commence_time, sites, home_team } = obj;
            this.games.push({
              teams: teams[0] + " VS " + teams[1],
              time: commence_time,
              odds: sites,
              home: home_team
            });
          });
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    axios
      .get(
        "https://api.the-odds-api.com/v3/sports/?apiKey=799dd1f2c9a88d205fc9307305051e73"
      )
      .then(response => {
        const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
        parsedobj.map(obj =>
          this.gameTypes.push({
            text: obj.details,
            value: obj.key
          })
        );
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
#dropdown {
  background-color: #114b5f;
}
</style>
