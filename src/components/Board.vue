<template>
  <ul v-if="games.data && games.data.length">
    <li v-for="game of games.data" :key="game.id">
      <p>Teams: {{ game.teams }}</p>
      <span>{{ game.commence_time | moment("dddd, MMMM Do YYYY") }}</span>
    </li>
  </ul>
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
        `https://api.the-odds-api.com/v3/odds/?sport=upcoming&region=us&mkt=h2h&dateFormat=iso&apiKey=799dd1f2c9a88d205fc9307305051e73`
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
