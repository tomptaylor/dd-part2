<template>
  <div id="app">
  <label>Login</label>
  <fieldset>
   <label>Email: </label> <input type="email"/></br>
   <label>Password: </label> <input type="email"/>
  </fieldset>
<setup/>
</div>

</template>

<script>

import { bus } from "./main";
import setup from "./components/setup";
import store from "./store";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    setup
  }
}

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
