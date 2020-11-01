<template>
  <div>
    <b-dropdown id="dropdown-1" text="Dropdown" class="m-md-2" dropright>
      <b-dropdown-item v-for="game of games.data" :key=game.commence_time >{{ game }}</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
    </b-dropdown>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      games: []
    };
  },
  beforeMount() {
    axios
      .get(
        // `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=799dd1f2c9a88d205fc9307305051e73`
        // `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&dateFormat=iso&oddsFormat=american&apiKey=799dd1f2c9a88d205fc9307305051e73`
        // `&sport={sport}&region={region}&mkt={mkt}`

        // Get all sports
        `https://api.the-odds-api.com/v3/sports/?apiKey=799dd1f2c9a88d205fc9307305051e73`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.games = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
