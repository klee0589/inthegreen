<template>
  <b-container fluid id="lotto">
    <b-row>
      <b-col cols="12" md="6" style="color: black">
        <b-button variant="success" @click="generateLottoNumbers"
          >Generate Lotto</b-button
        >
        <b-table
          striped
          hover
          :items="generatedLottoNumbers"
          :fields="fields"
          :sort-desc="sortDesc"
        ></b-table>
        <b-table
          striped
          hover
          :items="generatedLottoFinalNumber"
          :fields="fields"
          :sort-desc="sortDesc"
        ></b-table>
      </b-col>
      <b-col cols="12" md="6">
        <b-overlay
          :show="isLoading"
          :variant="success"
          :opacity="0.85"
          rounded="sm"
        >
          <b-table striped hover :items="winningNumbers"></b-table>
        </b-overlay>
      </b-col>
      <!-- <b-col cols="6" style="color: black">
        Picked
        <ul>
          <li v-for="(pick, index) in talliedPick" :key="pick + index">
            {{ pick.id }} | {{ pick.tally }}
            <b-progress
              :value="pick.tally"
              :max="winningNumbers.length"
              show-progress
              animated
            ></b-progress>
          </li>
        </ul>
      </b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import { DateTime } from "luxon";

export default {
  data() {
    return {
      sortBy: "id",
      sortDesc: true,
      winningNumbers: [],
      picked: [],
      talliedPick: [],
      generatedLottoNumbers: null,
      generatedLottoFinalNumber: null,
      fields: [
        {
          key: "number",
          sortable: true
        }
      ],
      isLoading: false
    };
  },
  methods: {
    formatDateAssigned(value) {
      return DateTime.fromISO(value, {
        zone: "America/New_York"
      }).toLocaleString(DateTime);
    },
    generateLottoNumbers() {
      const numberCollection = [];

      for (let i = 0; i <= 4; i++) {
        let randomElement = this.picked[
          Math.floor(Math.random() * this.picked.length)
        ];
        if (numberCollection.indexOf(randomElement) === -1) {
          randomElement = this.picked[
            Math.floor(Math.random() * this.picked.length)
          ];
        }
        numberCollection.push({ number: parseInt(randomElement) });
      }

      const randomPowerBallNumbers = [
        {
          number: this.winningNumbers[
            Math.floor(Math.random() * this.winningNumbers.length)
          ].power
        }
      ];

      this.generatedLottoNumbers = numberCollection;
      this.generatedLottoFinalNumber = randomPowerBallNumbers;
    }
  },
  created() {
    this.isLoading = true;
    axios
      .get("https://data.ny.gov/resource/d6yy-54nr.json")
      .then(response => {
        this.items = response.data;
        const numbers = JSON.parse(JSON.stringify(response.data));
        numbers.map(obj => {
          const splitNum = obj.winning_numbers.split(" ");
          splitNum.map(number => {
            this.picked.push(number);
          });
          this.winningNumbers.push({
            date: this.formatDateAssigned(obj.draw_date),
            first: parseInt(splitNum[0]),
            seconds: parseInt(splitNum[1]),
            third: parseInt(splitNum[2]),
            fourth: parseInt(splitNum[3]),
            fifth: parseInt(splitNum[4]),
            power: parseInt(splitNum[5])
          });
        });
        for (let i = 1; i < 70; i++) {
          const { picked } = this;
          const groupedPicks = picked.filter(pick => parseInt(pick) === i)
            .length;
          this.talliedPick.push({ id: i, tally: groupedPicks });
        }
        this.isLoading = false;
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
  height: 100vh;
  overflow-y: scroll;
}
</style>
