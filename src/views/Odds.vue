<template>
  <b-container fluid id="form">
    <OddsCalculator />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OddsCalculator from "@/components/OddsCalculator.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";

@Component({
  components: {
    OddsCalculator,
    BaseDropdown
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
