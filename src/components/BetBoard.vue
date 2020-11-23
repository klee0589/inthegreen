<template>
  <div class="betBoardContainer">
    <b-row>
      <b-col cols="12" sm="4" v-for="game in odds" :key="game.teams">
        <b-button
          v-b-modal="game.teams"
          variant="outline-success"
          class="gameButton"
          >{{ game.teams }}</b-button
        >
        <b-modal :id="game.teams"><GameInfo :game="game"/></b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GameInfo from "./GameInfo";

export default {
  data() {
    return {
      selected: null
    };
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    odds: state => state.odds

    // // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  components: {
    GameInfo
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
