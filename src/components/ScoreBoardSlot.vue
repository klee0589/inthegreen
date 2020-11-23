<template>
  <div class="scoreboard">
    <div class="scoreboard__container">
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
export default {
  props: ["game"]
};
</script>

<style lang="scss">
$gray300: #d2d2d2;
$gray500: #6e6e6e;
$gray700: #212121;
$gray900: #0f0f0f;
$blue: #29bdde;
$lightBlue: #31a49b;
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
.text-danger {
  color: $red;
}
.label {
  font-size: 9px;
  text-transform: uppercase;
  color: $secondaryTextColor;
  font-weight: 700;
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
  margin-right: $space-size-2;
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
  background: $black;
  margin-bottom: $space-size;
  border-radius: $border-radius;
  &__container {
    padding: $space-size-2;
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
    font-size: 26px;
  }
  .scoreboard__result-separator {
    margin: 0 $space-size;
    color: $secondaryTextColor;
  }
  &__badge {
    width: 38px;
    height: 38px;
    img {
      height: 100%;
    }
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
      }
    }
    &--align-left {
      .scoreboard__name {
        text-align: left;
      }
    }
  }
  &__name {
    display: block;
    width: 100px;
  }

  &__nav {
    border-top: 1px solid $borderColor;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 $space-size-2;
    margin: 0;
  }
  &__basics {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
