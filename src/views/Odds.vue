<template>
  <b-container fluid id="form">
    <OddsCalculator />
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import OddsCalculator from "@/components/OddsCalculator.vue";
import Dropdown from "@/components/Dropdown.vue";

@Component({
  components: {
    OddsCalculator,
    Dropdown
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss"></style>
