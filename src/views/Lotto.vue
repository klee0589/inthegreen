<template>
  <div class="lotto">
    <LottoGenerator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LottoGenerator from "@/components/LottoGenerator.vue";

@Component({
  components: {
    LottoGenerator
  }
})
export default class Lotto extends Vue {}
</script>

<style lang="scss"></style>
