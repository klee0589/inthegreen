<template>
  <div id="scoreboard_container">
    SCOREBOARD
    <b-spinner
      variant="success"
      type="grow"
      label="Spinning"
      v-if="isLoading"
    ></b-spinner>
    <b-row>
      <b-col v-for="game in games" :key="game.id">
        <ScoreBoardSlot :game="game" />
      </b-col>
    </b-row>
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
      sport: this.$store.state,
    };
  },
  beforeMount() {
    this.getSports();
  },
  components: {
    ScoreBoardSlot,
  },
  methods: {
    async getSports() {
      this.isLoading = true;
      await axios
        .get(this.sport)
        .then((response) => {
          // console.log("here ", response);
          this.games = response.data.events;
          this.isLoading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<style lang="scss">
#scoreboard_container {
  background: black;
  border: 1px solid #42b983;
}
</style>
