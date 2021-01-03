<template>
  <b-container fluid id="lotto">
    <b-row>
      <b-col cols="12" md="6" style="color: black">
        <b-button @click="generateLottoNumbers">Generate Lotto</b-button>
        {{ generatedLottoNumbers.first }}
        {{ generatedLottoNumbers.second }}
        {{ generatedLottoNumbers.third }}
        {{ generatedLottoNumbers.fourth }}
        {{ generatedLottoNumbers.fifth }}
        {{ generatedLottoNumbers.powerball }}
      </b-col>
      <b-col cols="12" md="6">
        <b-overlay :show="isLoading" :opacity="0.85" rounded="sm">
          <b-table
            striped
            hover
            :items="getFormattedLottoNumbers.numbers"
          ></b-table>
        </b-overlay>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      sortBy: "key",
      sortDesc: true,
      picked: [],
      talliedPick: [],
      generatedLottoNumbers: {
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
        powerball: ""
      },
      generatedLottoFinalNumber: "",
      fields: [
        {
          key: "number",
          sortable: true
        }
      ],
      isLoading: false
    };
  },
  computed: mapGetters(["getFormattedLottoNumbers"]),
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime);
    },
    generateLottoNumbers() {
      const numberCollection = this.getFormattedLottoNumbers;

      for (const key in numberCollection) {
        const allSelectedNumbers = numberCollection[key];
        const randomElement =
          allSelectedNumbers[
            Math.floor(Math.random() * allSelectedNumbers.length)
          ];

        this.generatedLottoNumbers[key] = randomElement;
      }
    }
  },
  created() {
    this.$store.dispatch("fetchLottoNumbers");
  }
};
</script>

<style lang="scss">
#lotto {
  background-color: #42b983;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
}
</style>
