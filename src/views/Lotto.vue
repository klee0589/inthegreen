<template>
  <div class="lotto">
    <img :src="'./assets/img/rules.png'" />
    <LottoGenerator />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Dropdown from "@/components/Dropdown.vue";
import LottoGenerator from "@/components/LottoGenerator.vue";

@Component({
  components: {
    // Dropdown
    LottoGenerator
  }
})
export default class Lotto extends Vue {}
</script>

<style lang="scss">

</style>
