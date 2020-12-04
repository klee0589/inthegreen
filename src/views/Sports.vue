<template>
  <div class="sports">
    <b-overlay
      :show="isLoading"
      spinner-variant="success"
      spinner-type="grow"
      spinner-smallå
      rounded="sm"
    >
      Search Sports
      <Dropdown />
      <ScoreBoard />
      <BetBoard />
    </b-overlay>
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

<style lang="scss">
.sports {
  background-color: #114b5f;
}
</style>
