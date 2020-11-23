<template>
  <div>
    <b-form-select v-model="selected" :options="links"></b-form-select>
    <b-container fluid class="bv-example-row" id="gamesListContainer">
      <b-spinner
        variant="success"
        type="grow"
        label="Spinning"
        v-if="isLoading"
      ></b-spinner>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          med="6"
          v-for="game in games"
          :key="game.home_team"
        >
          <GameInfo :game="game" :isLoading="isLoading" />
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
      isLoading: false,
      fields: [
        { key: "teams" },
        { key: "odds", sortable: true },
        { key: "time", formatter: "formatDateAssigned", sortable: true },
      ],
      links: [
        { text: "NFL", value: "americanfootball_nfl" },
        { text: "EPL", value: "soccer_epl" },
        { text: "BUNDASLIGA", value: "soccer_germany_bundesliga" },
        { text: "CHAMPIONS", value: "soccer_uefa_champs_league" },
      ],
    };
  },
  components: {
    GameInfo,
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York",
      }).toLocaleString(DateTime.DATETIME_FULL);
    },
    async getSports() {
      this.isLoading = true;
      await axios
        .get(
          "https://api.the-odds-api.com/v3/sports/?apiKey=799dd1f2c9a88d205fc9307305051e73"
        )
        .then((response) => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
          parsedobj.map((obj) =>
            this.gameTypes.push({
              text: obj.details,
              value: obj.key,
            })
          );
          this.isLoading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  watch: {
    selected: function () {
      this.$store.commit("setSport", this.selected)
      const apiKey = "799dd1f2c9a88d205fc9307305051e73";
      this.isLoading = true;
      this.games = [];
      axios
        .get(
          `https://api.the-odds-api.com/v3/odds/?sport=${this.selected}&dateFormat=iso&oddsFormat=american&region=us`,
          {
            params: {
              api_key: apiKey,
            },
          }
        )
        .then((response) => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
          this.games = [];
          parsedobj.map((obj) => {
            const { teams, commence_time, sites, home_team } = obj;
            this.games.push({
              teams: teams[0] + " VS " + teams[1],
              home: teams[0],
              away: teams[1],
              time: DateTime.fromISO(commence_time, {
                zone: "America/New_York",
              }).toLocaleString(DateTime.DATETIME_FULL),
              odds: sites,
            });
          });
          this.isLoading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  created() {
    this.isLoaded = false;
    this.getSports();
  },
};
</script>

<style lang="scss">
#dropdown {
  background-color: #114b5f;
}
#gamesListContainer {
  padding: 20px 20px;
  background-color: #114b5f;
}
</style>
