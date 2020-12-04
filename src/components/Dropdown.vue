<template>
  <b-form-select v-model="selected" :options="links"></b-form-select>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      selected: null,
      games: [],
      gameTypes: [],
      isLoading: false,
      links: [
        {
          text: "NFL",
          value: [
            "americanfootball_nfl",
            "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
          ]
        },
        {
          text: "EPL",
          value: [
            "soccer_epl",
            "https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
          ]
        },
        {
          text: "BUNDASLIGA",
          value: [
            "soccer_germany_bundesliga",
            "https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard"
          ]
        },
        {
          text: "CHAMPIONS",
          value: [
            "soccer_uefa_champs_league",
            "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard"
          ]
        }
      ]
    };
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime.DATETIME_FULL);
    },
    async getSports() {
      this.isLoading = true;
      await axios
        .get(
          "https://api.the-odds-api.com/v3/sports/?apiKey=b212997d44e4db738af287daa3faabc8"
        )
        .then(response => {
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
          parsedobj.map(obj =>
            this.gameTypes.push({
              text: obj.details,
              value: obj.key
            })
          );
          this.isLoading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  watch: {
    selected: function(selectedOption) {
      this.$store.dispatch("setSport", selectedOption);
      this.$store.dispatch("setGamesForSport");
    }
  }
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
