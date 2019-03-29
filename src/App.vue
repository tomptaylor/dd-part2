<template>
  <div id="app">
  <label>Login</label>
  <fieldset>
   <label>Email: </label> <input type="email"/></br>
   <label>Password: </label> <input type="email"/>
  </fieldset>
  <label>Register</label>
  <fieldset>
    <ddStates dropDownName="States" :options="$store.state.states" />
    <ddDistricts v-show="showDist" /> <ddRoles v-show="showRole" />
    <ddSchools v-show="showSchool" />
  </fieldset>
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
import ddSchools from "./components/ddSchools";
import store from "./store";

export default {
  name: "App",
  components: {
    ddStates,
    ddDistricts,
    ddRoles,
    ddSchools
  },
  data: function() {
    return {
      showRole: false,
      showDist: false,
      showSchool: false
    };
  },
  created() {
    bus.$on("ddShow", data => {
      console.log(data);
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
        case "School":
          this.showSchool = true;
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
