<template>
  <div class="sports">
    Search Sports
    <BaseDropdown />
    <ScoreBoard />
    <BetBoard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseDropdown from "@/components/BaseDropdown.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";
import BetBoard from "@/components/BetBoard.vue";

@Component({
  components: {
    BaseDropdown,
    ScoreBoard,
    BetBoard
  }
})
export default class Sports extends Vue {}
</script>

<style lang="scss">
.sports {
  background-color: #114b5f;
}
</style>
