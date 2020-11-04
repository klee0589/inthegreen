<template>
  <div class="home">
    <Form />
    <Dropdown />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Form from "@/components/Form.vue";
import Dropdown from "@/components/Dropdown.vue";

@Component({
  components: {
    Form,
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
