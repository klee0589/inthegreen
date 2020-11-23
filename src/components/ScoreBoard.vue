<template>
  <div id="scoreboard_container">
    SCOREBOARD
    <b-spinner
      variant="success"
      type="grow"
      label="Spinning"
      v-if="isLoading"
    ></b-spinner>
    <ul>
        <li v-for="game in games" :key="game.id">
            <ScoreBoardSlot :game="game"/>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import ScoreBoardSlot from "./ScoreBoardSlot";

export default {
  data() {
    return {
      games: "",
      isLoading: false,
    };
  },
  beforeMount() {
    this.getSports();
  },
  components: {
      ScoreBoardSlot
  },
  methods: {
    async getSports() {
      this.isLoading = true;
      await axios
        .get(
          "http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
        )
        .then((response) => {
          console.log("here ", response);
          this.games = response.data.events;
          this.isLoading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style lang="scss">
#scoreboard_container {
  background: black;
  border: 1px solid #42b983;
//   border-radius: 0;
//   margin: 5px;
//   height: 100%;
}

// ul {
//   padding: 0;
// }
</style>
