<template>
  <div id="scoreboard_container">
    <b-overlay
      :show="isLoading"
      spinner-variant="success"
      spinner-type="grow"
      spinner-smallå
      rounded="sm"
    >
      <b-row>
        <b-col cols="12" sm="4">
          <li v-for="game in games" :key="game">
            <ScoreBoardSlot :game="game" />
          </li>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import ScoreBoardSlot from "./ScoreBoardSlot";
import { mapState } from "vuex";

export default {
  computed: mapState({
    sport: state => state.sport,
    games: state => state.games,
    isLoading: state => state.isGamesLoading
  }),
  components: {
    ScoreBoardSlot
  }
};
</script>

<style lang="scss">
#scoreboard_container {
  padding: 10px 5px;
}
</style>
