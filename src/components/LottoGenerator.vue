<template>
  <b-container fluid id="lotto">
    <b-row>
      <b-col cols="12" md="6" style="color: black">
        <b-button @click="generateLottoNumbers">Generate Lotto</b-button>
        <b-row>
          <b-col cols="12">
            <ul>
              <li
                v-for="(number, index) in generatedLottoNumbers"
                :key="index + number[0]"
              >
                <div class="lottoRowContainer">
                  <div>{{ index + 1 }}</div>
                  --

                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[0]) }"
                  >
                    {{ number[0] }}
                  </div>
                  |
                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[1]) }"
                  >
                    {{ number[1] }}
                  </div>
                  |
                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[2]) }"
                  >
                    {{ number[2] }}
                  </div>
                  |
                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[3]) }"
                  >
                    {{ number[3] }}
                  </div>
                  |
                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[4]) }"
                  >
                    {{ number[4] }}
                  </div>
                  | POWERBALL :
                  <div
                    class="numCell"
                    :style="{ background: setCellColor(number[5]) }"
                  >
                    {{ number[5] }}
                  </div>
                </div>
              </li>
            </ul>
          </b-col>
        </b-row>
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
import { LOTTO_NUM_COLORS } from "@/palette";

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
    setCellColor(value) {
      return LOTTO_NUM_COLORS[parseInt(value)].hex;
    },
    generateLottoNumbers() {
      const numberCollection = this.getFormattedLottoNumbers.lotto;
      for (let i = 1; i < 10; i++) {
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
#lotto {
  background-color: #42b983;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
}
.lottoRowContainer {
  display: flex;
  font-size: 17px;
  justify-content: center;
}
.numCell {
  color: white;
}
</style>
