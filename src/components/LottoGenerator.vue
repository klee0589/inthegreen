<template>
  <b-container fluid id="lotto" col="6">
    <b-row>
      <b-col cols="6">
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";
// import GameInfo from "./GameInfo.vue";

export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    // GameInfo
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
      .get("https://data.ny.gov/resource/d6yy-54nr.json")
      .then(response => {
        //   console.log('yooo ', response.data)
        this.items = response.data;
        // const parsedobj = JSON.parse(JSON.stringify(response.data)).data;
        // parsedobj.map(obj =>
        //   this.gameTypes.push({
        //     text: obj.details,
        //     value: obj.key
        //   })
        // );
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
#lotto {
  background-color: #42b983;
  position:relative;    
  height:600px; 
  overflow-y:scroll;
}
</style>
