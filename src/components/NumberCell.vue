<template>
  <div>
  </div>
</template>

<script>
import { COLOR } from "@/palette";

export default {
  data() {
    return {
      sortBy: "key",
      sortDesc: true,
      picked: [],
      talliedPick: [],
      generatedLottoNumbers: [],
      generatedLottoFinalNumber: "",
      fields: [
        {
          key: "number",
          sortable: true
        }
      ],
      isLoading: false,
      style: 
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
      const numberCollection = this.getFormattedLottoNumbers.lotto;
      for (let i = 0; i < 100; i++) {
        const generatedNumbers = [];
        for (const key in numberCollection) {
          const allSelectedNumbers = numberCollection[key];
          const randomElement =
            allSelectedNumbers[
              Math.floor(Math.random() * allSelectedNumbers.length)
            ];
          generatedNumbers.push(randomElement);
        }
        this.generatedLottoNumbers.push(generatedNumbers);
      }
    }
  },
  created() {
    this.$store.dispatch("fetchLottoNumbers");
  }
};
</script>

<style lang="scss">

</style>
