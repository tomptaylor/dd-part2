<template>
  <div id="app">
    <ddStates dropDownName="States" :options="$store.state.states" />
    <ddDistricts />
    <dropdown
      v-show="showRole"
      dropDownName="Role Level"
      :options="$store.state.rolelevel"
    />
  </div>
</template>

<script>
import dropdown from "./components/dropdown";
import ddStates from "./components/ddStates";
import ddDistricts from "./components/ddDistricts";

import store from "./store";

export default {
  name: "App",
  components: {
    dropdown,
    ddStates,
    ddDistricts
  },
  data: function() {
    return {
      showRole: true,
      showDist: false
    };
  }
};

// <dropdown
//   v-show="showDist"
//   dropDownName="Districts"
//   :options="$store.state.districts"
// />
// <dropdown
//   v-show="$store.state.showSchool"
//   dropDownName="Schools"
//   :options="$store.state.schoolsBySelectedDistict"
// />
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
