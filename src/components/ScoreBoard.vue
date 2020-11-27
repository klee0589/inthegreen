<template>
  <div id="scoreboard_container">
    <b-overlay
      :show="isLoading"
      spinner-variant="success"
      spinner-type="grow"
      spinner-smallå
      rounded="sm"
      å
    >
      <b-row>
        <b-col v-for="game in games" :key="game.id" cols="12" sm="4">
          <ScoreBoardSlot :game="game" />
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import axios from "axios";
import ScoreBoardSlot from "./ScoreBoardSlot";
import { mapState } from "vuex";

export default {
  data() {
    return {
      games: "",
      isLoading: false
    };
  },
  mounted() {
    this.getSports();
  },
  computed: mapState({
    sport: state => state.sport
  }),
  watch: {
    sport: function() {
      this.getSports();
    }
  },
  components: {
    ScoreBoardSlot
  },
  methods: {
    async getSports() {
      this.isLoading = true;
      await axios
        .get(this.sport[1])
        .then(response => {
          this.games = response.data.events;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          this.errors.push(e);
        });
    }
  }
};
</script>

<style lang="scss">
#scoreboard_container {
  padding: 10px 5px;
}
</style>
