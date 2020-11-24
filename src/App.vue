<template>
  <div id="app">
    <div id="nav">
      <router-link to="/odds">Odd Calculator</router-link> |
      <router-link to="/sports">Sports</router-link> |
      <router-link to="/lotto">Lotto</router-link>
    </div>
    <div class="timeContainer">
      {{ time | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
    </div>
    <router-view />
  </div>
</template>

<script>
import { DateTime } from "luxon";

export default {
  data() {
    return {
      time: ""
    };
  },
  created() {
    this.displayTime();
    setInterval(() => {
      this.displayTime();
    }, 20000);
  },
  methods: {
    displayTime() {
      this.time = DateTime.local().toLocaleString(DateTime.DATETIME_SHORT);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background-color: #114b5f;
  height: 100%;
  min-height: 100vh;
  font-family: "Graduate", cursive;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

li {
  list-style-type: none;
}

.timeContainer {
  margin: 10px;
  padding: 10px;
  font-size: 25px;
}
</style>
