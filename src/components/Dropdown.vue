<template>
  <b-form-select v-model="selected" :options="links"></b-form-select>
</template>

<script>
import { DateTime } from "luxon";
import { links } from "@/constants";

export default {
  data() {
    return {
      selected: null,
      games: [],
      gameTypes: [],
      links
    };
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime.DATETIME_FULL);
    }
  },
  watch: {
    selected: function(selectedOption) {
      this.$store.dispatch("setSport", selectedOption);
      this.$store.dispatch("setGamesForSport");
    }
  }
};
</script>

<style lang="scss">
#dropdown {
  background-color: #114b5f;
}
#gamesListContainer {
  padding: 20px 20px;
  background-color: #114b5f;
}
</style>
