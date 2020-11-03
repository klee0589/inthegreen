<template>
  <b-card :title="game.teams" :sub-title="game.time">
    <b-card-text>
      <ul>
        <li v-for="odd in game.odds" :key="odd">{{ odd.site_nice }} | {{ odd.odds.h2h }}</li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: ["game"]
};
</script>
