<template>
  <div>
    <b-form-select v-model="selected" :options="gameTypes"></b-form-select>
    {{games}}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: null,
      games: [],
      gameTypes: []
    };
  },
  methods: {
    onClick() {
      //   console.log("Clicked ", e);
    }
  },
  watch: {
    selected: function(val) {
    axios
      .get(
        `https://api.the-odds-api.com/v3/odds/?apiKey=799dd1f2c9a88d205fc9307305051e73&sport=${this.selected}&region=us`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        // this.games = response.data;
        const parsedobj = JSON.parse(JSON.stringify(response.data)).data;

        this.games = []

        parsedobj.map(obj =>
          this.games.push({
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
