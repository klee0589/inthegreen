<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Odd Calculator</router-link> |
      <router-link to="/sports">Sports</router-link> |
      <router-link to="/lotto">Lotto</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  background-color: #114B5F;
  height: 100vh;
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
</style>
