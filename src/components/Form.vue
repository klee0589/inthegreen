<template>
  <b-container fluid id="form">
    <b-form @submit="calculate" @reset="onReset">
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
            <b-form-radio-group v-model="form.checked" id="radio-4">
              <b-form-radio value="+">+</b-form-radio>
              <b-form-radio value="-">-</b-form-radio>
            </b-form-radio-group>
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
        <b-col cols="2">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-card class="mt-3" header="Winning">
      <pre class="m-0">{{ profit }}</pre>
    </b-card>
    <b-card>
      The favorite in a matchup, indicated by a minus (-) sign, will have a
      given number of points taken away from its final score, while the
      underdog, known by its plus (+) sign, will have the same number of points
      added to its final score.
    </b-card>
    <b-card>
      For example: Dallas –9.5 means that Dallas is the favorite and must win by
      at least 10 points. Washington +9.5 means that Washington is the underdog
      and has been “spotted” or “given” 9.5 points; if Washington loses by 9 or
      fewer points, it is a winning bet (if Washington pulls an outright upset,
      it is also a winning bet).
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
      },
      profit: ""
      // users: []
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
      this.form.profit = "";
    },
    calculate(evt) {
      evt.preventDefault();
      const { stake, odds, checked } = this.form;
      if (checked === "+") {
        // Profit = (Stake * Odds) / 100
        this.profit = new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3
        }).format((stake * odds) / 100);
      } else {
        // Profit = (Stake / Odds) * 100
        this.profit = new Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3
        }).format((stake / odds) * 100);
      }
    }
  }
};
</script>

<style lang="scss">
#form {
  background-color: #88D498;
}
</style>
