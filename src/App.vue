<template>
  <div id="app">
    <ddStates dropDownName="States" :options="$store.state.states" />
    <ddDistricts v-show="showDist" /> <ddRoles v-show="showRole" />
  </div>
</template>

<script>
// <dropdown
//   v-show="showRole"
//   dropDownName="Role Level"
//   :options="$store.state.rolelevel"
// />
import { bus } from "./main";
import ddStates from "./components/ddStates";
import ddRoles from "./components/ddRoles";
import ddDistricts from "./components/ddDistricts";

import store from "./store";

export default {
  name: "App",
  components: {
    ddStates,
    ddDistricts,
    ddRoles
  },
  data: function() {
    return {
      showRole: false,
      showDist: false
    };
  },
  created() {
    bus.$on("ddShow", data => {
      switch (data) {
        case "role":
          this.showRole = true;
          break;
        case "dist":
          this.showDist = true;
          break;
        case "state":
          this.showState = true;
          break;
        default:
          break;
      }
      //     this.LOAD_DISTRTICTS();
    });
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
