<template>
  <div>
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
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: null
    };
  },
  methods: {

  },
  watch: {
    selected: function(selectedOption) {
      const apiKey = "799dd1f2c9a88d205fc9307305051e73";
      this.isLoading = true;
      this.games = [];
      this.$store.commit("setSport", selectedOption);
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
          this.games = [];
          parsedobj.map(obj => {
            const { teams, commence_time, sites } = obj;
            this.games.push({
              teams: teams[0] + " VS " + teams[1],
              home: teams[0],
              away: teams[1],
              time: DateTime.fromISO(commence_time, {
                zone: "America/New_York"
              }).toLocaleString(DateTime.DATETIME_FULL),
              odds: sites
            });
          });
          this.isLoading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  created() {
    this.isLoaded = false;
    this.getSports();
  }
};
</script>

<style lang="scss">
</style>
