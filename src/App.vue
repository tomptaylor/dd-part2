<template>
  <div id="app">
    <dropdown dropDownName="States" :options="$store.state.states" />
    <dropdown
      v-show="showRole"
      dropDownName="Role Level"
      :options="$store.state.rolelevel"
    />
    <dropdown
      v-show="showDist"
      dropDownName="Districts"
      :options="$store.state.districts"
    />
    <dropdown
      v-show="$store.state.showSchool"
      dropDownName="Schools"
      :options="$store.state.schoolsBySelectedDistict"
    />
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
  data: function() {
    return {
      showRole: true,
      showDist: false
    };
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
