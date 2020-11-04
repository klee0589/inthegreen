<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Dropdown />
    <!-- <Board /> -->
    <!-- <Form /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue"; // @ is an alias to /src
import Board from "@/components/Board.vue"; // @ is an alias to /src
import Dropdown from "@/components/Dropdown.vue"; // @ is an alias to /src

@Component({
  components: {
    Form,
    Board,
    Dropdown
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  height: 100vh;
  background-color: #114b5f;
}
</style>
