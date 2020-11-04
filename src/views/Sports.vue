<template>
  <div class="sports">
    Search Sports
    <Dropdown />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dropdown from "@/components/Dropdown.vue";

@Component({
  components: {
    Dropdown
  }
})
export default class Sports extends Vue {}
</script>

<style lang="scss">

</style>
