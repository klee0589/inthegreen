<template>
  <b-container fluid id="lotto" col="6">
    <b-row>
      <b-col cols="6">
        <b-table striped hover :items="winningNumbers"></b-table>
      </b-col>
      <b-col cols="6" style="color:black">
        Picked
        <!-- {{ tallyWinningNumbers }} -->
        <b-table
          striped
          hover
          :items="picked"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        ></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";
// import GameInfo from "./GameInfo.vue";

export default {
  data() {
    return {
      sortBy: "id",
      sortDesc: false,
      winningNumbers: [],
      picked: []
    };
  },
  components: {
    // GameInfo
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime.DATETIME_FULL);
    }
  },
  mounted() {
    for (let i = 0; i < 69; i++) {
      this.picked.push({ name: i });
    }
    axios
      .get("https://data.ny.gov/resource/d6yy-54nr.json")
      .then(response => {
        this.items = response.data;
        const numbers = response.data;
        numbers.map(obj => {
          const splitNum = obj.winning_numbers.split(" ");
          splitNum.map(number => {
            const intNum = parseInt(number);
            this.picked.push(intNum);
          });
          this.winningNumbers.push({
            date: this.formatDateAssigned(obj.draw_date),
            first: splitNum[0],
            seconds: splitNum[1],
            third: splitNum[2],
            fourth: splitNum[3],
            fifth: splitNum[4],
            power: splitNum[5]
          });
        });
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style lang="scss">
#lotto {
  background-color: #42b983;
  position: relative;
  height: 600px;
  overflow-y: scroll;
}
</style>
