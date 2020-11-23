<template>
  <div class="sports">
    Search Sports
    <Dropdown />
    <ScoreBoard />
    <BetBoard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dropdown from "@/components/Dropdown.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";
import BetBoard from "@/components/BetBoard.vue";

@Component({
  components: {
    Dropdown,
    ScoreBoard,
    BetBoard
  }
})
export default class Sports extends Vue {}
</script>

<style lang="scss"></style>
