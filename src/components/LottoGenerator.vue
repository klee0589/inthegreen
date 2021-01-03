<template>
  <b-container fluid id="lotto">
    <b-row>
      <b-col cols="12" md="6" style="color: black">
        <b-button @click="generateLottoNumbers">Generate Lotto</b-button>
        <div v-for="number in generatedLottoNumbers" :key="number.id">
          {{ number }}
        </div>
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
      generatedLottoNumbers: "",
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
      const numberCollection = [];
      const unqiuePicked = this.picked;

      console.log('numberCollection ', this.getFormattedLottoNumbers.first)
      // console.log('random ', unqiuePicked)

      while (numberCollection.length < 5) {
        const randomElement =
          unqiuePicked[Math.floor(Math.random() * unqiuePicked.length)];
        // console.log('random ', unqiuePicked)
        // console.log('random ', Math.floor(Math.random() * unqiuePicked.length))
        // console.log('random ', randomElement)
        if (numberCollection.indexOf(randomElement) === -1) {
          numberCollection.push({
            value: randomElement,
            id: `${randomElement}`
          });
        }
      }
      this.generatedLottoNumbers = numberCollection.sort();
      this.generatedLottoFinalNumber =
        unqiuePicked[Math.floor(Math.random() * unqiuePicked.length)];
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
