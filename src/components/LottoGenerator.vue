<template>
  <b-container fluid id="lotto" col="6">
    <b-row>
      <b-col cols="6">
        <b-table striped hover :items="winningNumbers"></b-table>
      </b-col>
      <b-col cols="6" style="color:black">
        Picked
        <b-list-group>
          <b-list-group-item
            v-for="(pick, index) in talliedPick"
            :key="pick + index"
            >{{ pick.id }} | {{ pick.tally.length }}</b-list-group-item
          >
        </b-list-group>
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
      picked: [],
      talliedPick: []
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
  // created() {
  //   for (let i = 1; i < 69; i++) {
  //     this.talliedPick.push({ id: i, tally: 0 });
  //   }
  // },
  created() {
    axios
      .get("https://data.ny.gov/resource/d6yy-54nr.json")
      .then(response => {
        this.items = response.data;
        // const numbers = response.data;
        const numbers = JSON.parse(JSON.stringify(response.data));
        // console.log("numbers ", numbers);
        numbers.map(obj => {
          const splitNum = obj.winning_numbers.split(" ");

          // const result = words.filter(word => word.length > 6)
          splitNum.map(number => {
            this.picked.push(number);
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
        for (let i = 1; i < 69; i++) {
          const { picked } = this;
          const groupedPicks = picked.filter(pick => parseInt(pick) === i);
          console.log('grouped ', groupedPicks)
          this.talliedPick.push({ id: i, tally: groupedPicks });
        }
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
