<template>
  <b-card :title="game.teams" :sub-title="game.time" id="gameInfoContainer">
    <b-card-text>
      <ul>
        <li v-for="(odd, index) in game.odds" :key="index">
          {{ odd.site_nice }} | {{ odd.odds.h2h }}
        </li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      teams: "",
      fields: [
        "site_nice",
        "odds"
      ]
    };
  },
  props: ["game"],
  mounted() {
    this.teams = this.game.teams[0] + " VS " + this.game.teams[1];
  }
};
</script>

<style lang="scss">
#gameInfoContainer {
  // background:lightgray;
  border: 1px solid #42b983;
  border-radius: 0;
  margin: 5px;
  height: 100%;
}
</style>
