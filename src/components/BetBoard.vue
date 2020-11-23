<template>
  <div>
    <b-row>
      <b-col cols="12" sm="6" med="6" v-for="game in odds" :key="game.teams">
        <!-- Using value -->
        <b-button v-b-modal="game.teams">{{ game.teams }}</b-button>
        <b-modal :id="game.teams"><GameInfo :game="game" /></b-modal>
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
      selected: null,
    };
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    odds: (state) => state.odds

    // // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  components: {
    GameInfo,
  },
};
</script>

<style lang="scss"></style>
