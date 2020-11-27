<template>
  <div class="scoreboard">
    <div class="scoreboard__container">
      {{ game | getWeather }}
      <div class="scoreboard__basics mb-05">
        <span class="label">
          {{ game.competitions[0].status.type.description }}
        </span>
        <span class="text-danger">
          {{ game.competitions[0].status.displayClock }}
        </span>
      </div>
      <div class="scoreboard__teams">
        <div class="scoreboard__team scoreboard__team--align-right mr-2">
          <div class="scoreboard__badge ml-1"></div>
          <span class="scoreboard__name">{{
            game.competitions[0].competitors[0].team.displayName
          }}</span>
        </div>
        <div class="scoreboard__result">
          <span class="scoreboard__result-home">{{
            game.competitions[0].competitors[0].score
          }}</span>
          <span class="scoreboard__result-separator">:</span>
          <span class="scoreboard__result-home">{{
            game.competitions[0].competitors[1].score
          }}</span>
        </div>
        <div class="scoreboard__team scoreboard__team--align-left ml-2">
          <div class="scoreboard__badge mr-1"></div>
          <span class="scoreboard__name">{{
            game.competitions[0].competitors[1].team.displayName
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["game"],
  filters: {
    getWeather: function() {
      axios
        .get("https://community-open-weather-map.p.rapidapi.com/weather", {
          params: {
            headers: {
              "x-rapidapi-key":
                "4CAmq0xDZ3mshfMBzPhg3nXFdwbPp1iAulFjsndyLDYEjyHWws",
              "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            },
            q: "London,uk",
            lat: "0",
            lon: "0",
            callback: "test",
            id: "2172797",
            lang: "null",
            units: '"metric" or "imperial"',
            mode: "json"
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }

    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       // console.log(response.data);
    //       return response;
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
  }
};
</script>

<style lang="scss">
$gray300: #d2d2d2;
$gray500: #6e6e6e;
$gray700: #212121;
$gray900: #0f0f0f;
$blue: #29bdde;
$lightBlue: #31a49b;
$yellow: #ffcd02;
$red: #ff3d3d;
$border-radius: 4px;
$lightGreen: #507450;
$green: #29502c;
$darkRed: #be2c2c;
$space-size: 8px;
$space-size-2: $space-size * 2;
$space-size-3: $space-size * 3;
$space-size-4: $space-size * 4;
$space-size-5: $space-size * 5;
$space-size-6: $space-size * 6;

$white: $gray300;
$secondaryTextColor: $gray500;
$black: $gray900;
$bodyBg: $gray700;
$borderColor: $gray700;
$primaryColor: $blue;
.scoreboard:hover {
  background: $gray900;
}
.text-danger {
  color: $yellow;
}
.label {
  font-size: 12px;
  text-transform: uppercase;
  color: $white;
  font-weight: 900;
  letter-spacing: 0.095em;
  margin-bottom: $space-size / 2;
}
.mb-05 {
  margin-bottom: $space-size / 2;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-1 {
  margin-bottom: $space-size;
}
.mt-1 {
  margin-top: $space-size;
}
.mt-2 {
  margin-top: $space-size-2;
}
.ml-1 {
  margin-left: $space-size;
}
.ml-2 {
  margin-left: $space-size-2;
}
.ml-3 {
  margin-left: $space-size-3;
}
.ml-4 {
  margin-left: $space-size-4;
}
.ml-5 {
  margin-left: $space-size-5;
}

.mr-1 {
  margin-right: $space-size;
}
.mr-2 {
  margin-right: $space-size;
}
.mr-3 {
  margin-right: $space-size-3;
}
.mr-4 {
  margin-right: $space-size-4;
}
.mr-5 {
  margin-right: $space-size-5;
}
.scoreboard {
  // background: $black;
  border: 1px solid #42b983;
  margin-bottom: $space-size;
  border-radius: $border-radius;
  &__container {
    padding: $space-size;
  }
  &__result {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .scoreboard__result-home,
  .scoreboard__result-away,
  .scoreboard__result-separator {
    font-size: 18px;
  }
  .scoreboard__result-separator {
    margin: 0 $space-size;
    color: $secondaryTextColor;
  }
  &__badge {
    width: 32px;
    height: 32px;
    // img {
    //   height: 100%;
    // }
  }
  &__teams {
    display: flex;
    justify-content: center;
  }
  &__team {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    &--align-right {
      flex-direction: row-reverse;
      .scoreboard__name {
        text-align: right;
        font-size: 12px;
      }
    }
    &--align-left {
      .scoreboard__name {
        text-align: left;
        font-size: 12px;
      }
    }
  }
  &__name {
    display: block;
    width: 100px;
  }
  &__basics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
