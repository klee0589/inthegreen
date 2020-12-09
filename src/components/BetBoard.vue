<template>
  <div class="betBoardContainer">
    <b-overlay
      :show="isLoading"
      spinner-variant="success"
      spinner-type="grow"
      spinner-small
      rounded="sm"
    >
      <b-row>
        <b-col cols="12" sm="4" v-for="game in odds" :key="game.id">
          <b-button
            v-b-modal="game.teams"
            variant="outline-success"
            class="gameButton"
            >{{ game.teams }}</b-button
          >
          <b-modal
            :id="game.teams"
            :title="game.teams"
            cancel-disabled
            size="xl"
            centered
            ><BetInfo :game="game"
          /></b-modal>
        </b-col>
      </b-row>
    </b-overlay>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BetInfo from "./BetInfo";

export default {
  data() {
    return {
      selected: null
    };
  },
  computed: mapState({
    odds: state => state.odds,
    isLoading: state => state.isOddsLoading
  }),
  components: {
    BetInfo
  }
};
</script>

<style lang="scss">
.gameButton {
  width: 100%;
  font-size: 12px;
  margin: 4px;
  border: 1px solid #42b983;
  border-radius: 0;
}
.betBoardContainer {
  padding: 0px 2px;
}
</style>
