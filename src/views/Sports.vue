<template>
  <div class="sports">
    <ScoreBoard />
    Search Sports
    <Dropdown />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dropdown from "@/components/Dropdown.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";

@Component({
  components: {
    Dropdown,
    ScoreBoard
  }
})
export default class Sports extends Vue {}
</script>

<style lang="scss"></style>
