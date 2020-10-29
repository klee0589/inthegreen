<template>
  <b-container fluid>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-row>
        <b-col cols="2">
          <b-form-group
            id="input-group-1"
            label="Stake:"
            description="How much you betting?"
          >
            <b-input-group size="md" prepend="$" append=".00">
              <b-form-input v-model="form.stake"></b-form-input>
            </b-input-group> </b-form-group
        ></b-col>
        <b-col cols="2">
          <b-form-group id="input-group-4" label="+/-">
            <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
              <b-form-checkbox value="+">+</b-form-checkbox>
              <b-form-checkbox value="-">-</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
        </b-col>
        <b-col cols="2">
          <b-form-group
            id="input-group-1"
            label="Odds:"
            label-for="input-1"
            description="Odds on bet"
          >
            <b-form-input
              id="input-1"
              v-model="form.odds"
              type="number"
              required
              placeholder="ex: 300"
            ></b-form-input> </b-form-group
        ></b-col>
      </b-row>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        stake: "",
        odds: "",
        checked: []
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.stakes = "";
      this.form.odds = "";
      this.form.checked = [];
    }
  }
};
</script>