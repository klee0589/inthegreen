<template>
  <div id="scoreboard_container">
    <b-row>
      <b-col v-for="game in games" :key="game.id" cols="12" sm="4">
        <ScoreBoardSlot :game="game" />
      </b-col>
    </b-row>
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
    // arrow functions can make the code very succinct!
    sport: state => state.sport

    // // passing the string value 'count' is same as `state => state.count`
    // countAlias: 'count',

    // // to access local state with `this`, a normal function must be used
    // countPlusLocalState (state) {
    //   return state.count + this.localCount
    // }
  }),
  // watch: {
  //   sport: function() {
  //     this.getSports();
  //   }
  // },
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
