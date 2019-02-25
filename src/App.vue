<template>
  <div id="app">
    <dropdown dropDownName="States" :options="$store.state.states" />
    <dropdown dropDownName="Districts" :options="$store.state.districts" />
  </div>
</template>

<script>
import dropdown from "./components/dropdown";
import store from "./store";

export default {
  name: "App",
  components: {
    dropdown
  },
  data() {
    return {};
  }
};
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
