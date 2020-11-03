<template>
  <b-card :title="teams" :sub-title="game.time">
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
      teams: ""
    };
  },
  props: ["game"],
  mounted() {
    this.teams = this.game.teams[0] + " VS " + this.game.teams[1]
  },
  unMounted() {
    this.teams = ""
  }
};
</script>
