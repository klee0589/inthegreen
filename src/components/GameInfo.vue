<template>
  <b-card :title="game.teams" :sub-title="game.time" id="gameInfoContainer">
    <b-card-text>
      <b-row>
        <b-col>
          {{ "SOURCES"}}
        </b-col>
        <b-col>
          {{ game.home }}
        </b-col>
        <b-col>
          {{ "TIE" }}
        </b-col>
        <b-col>
          {{ game.away }}
        </b-col>
      </b-row>
      <ul>
        <li v-for="(odd, index) in game.odds" :key="index">
          <b-row>
            <b-col>
              {{ odd.site_nice }}
            </b-col>
            <b-col>
              {{ odd.odds.h2h[0] }}
            </b-col>
            <b-col>
              {{ odd.odds.h2h[2] }}
            </b-col>
            <b-col>
              {{ odd.odds.h2h[1] }}
            </b-col>
          </b-row>
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
      fields: ["site_nice", "odds"],
    };
  },
  props: ["game"],
  created() {
    this.teams = this.game.teams[0] + " VS " + this.game.teams[1];
  },
};
</script>

<style lang="scss">
#gameInfoContainer {
  background:#114B5F;;
  border: 1px solid #42b983;
  border-radius: 0;
  margin: 5px;
  height: 100%;
}

ul {
  padding: 0;
}
</style>
