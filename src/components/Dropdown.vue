<template>
  <div>
    <b-form-select v-model="selected" :options="gameTypes"></b-form-select>
    <b-table striped hover :items="games" :fields="fields"></b-table>
    {{ games }}
  </div>
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
      fields: [
        { key: "teams" },
        { key: "sites" },
        { key: "time", formatter: "formatDateAssigned" }
      ]
    };
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {zone: 'America/New_York'}).toLocaleString(DateTime.DATETIME_FULL)
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
              "api_key": apiKey
            }
          }
        )
        .then(response => {
          // JSON responses are automatically parsed.
          // this.games = response.data;
          const parsedobj = JSON.parse(JSON.stringify(response.data)).data;

          //   console.log(parsedobj);

          this.games = [];
          // this.games = parsedobj

          parsedobj.map(obj =>
            this.games.push({
              teams: obj.teams,
              time: obj.commence_time,
              sites: obj.sites
            })
          );

          // console.log(parsedobj.data)
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
        // JSON responses are automatically parsed.
        // this.games = response.data;
        const parsedobj = JSON.parse(JSON.stringify(response.data)).data;

        parsedobj.map(obj =>
          this.gameTypes.push({
            text: obj.details,
            value: obj.key
          })
        );

        // console.log(parsedobj.data)
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
