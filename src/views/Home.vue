<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Board />
    <!-- <Form /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue"; // @ is an alias to /src
import Board from "@/components/Board.vue"; // @ is an alias to /src

@Component({
  components: {
    Form,
    Board
  }
})
export default class Home extends Vue {}
</script>
