<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="route in routes"
        :to="route.url"
        :key="route.name"
        class="route"
        >{{ route.name }}</router-link
      >
    </div>
    <img src="./assets/logo.png" class="logo" />
    <div class="timeContainer">
      {{ time | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}
    </div>
    <router-view />
  </div>
</template>

<script>
import { DateTime } from "luxon";
import { routes } from "./constants";

export default {
  data() {
    return {
      time: "",
      routes
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
      this.time = DateTime.local().toISO(DateTime.DATETIME_SHORT);
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

.logo {
  max-height: 50px;
  -webkit-animation: spinner 20000ms infinite linear;
  -moz-animation: spinner 20000ms infinite linear;
  -ms-animation: spinner 20000ms infinite linear;
  -o-animation: spinner 20000ms infinite linear;
  animation: spinner 20000ms infinite linear;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.route {
  padding: 3px;
}
</style>
