<template>
  <div>
    <label>Setup</label>
    <fieldset>
      <ddRoles/>
      <ddStates dropDownName="States" :options="$store.state.states"/>
      <ddDistricts v-show="showDist"/>
      <ddSchools v-show="showSchool"/>
    </fieldset>
  </div>
</template>

<script>
import { bus } from "./../main";
import ddStates from "./ddStates";
import ddRoles from "./ddRoles";
import ddDistricts from "./ddDistricts";
import ddSchools from "./ddSchools";

export default {
  components: {
    ddStates,
    ddDistricts,
    ddRoles,
    ddSchools
  },
  data: function() {
    return {
      arrSetup: [],
      selectedRole: "",
      selectedState: "",
      showRole: true,
      showDist: false,
      showSchool: false
    };
  },
  created() {
    bus.$on("ddShow", data => {
      console.log(Object.keys(data)[0]);

      switch (Object.keys(data)[0]) {
        case "role":
          this.selectedRole = data.role;
          this.arrSetup.push(data);
          this.showRole = true;
          break;
        case "dist":
          this.showDist = true;
          if (this.selectRole == "Teacher") {
            this.showSchool = true;
          }
          break;
        case "state":
          this.selectedState = data.state;
          this.arrSetup.push(data);
          this.showDist = true;
          break;
        case "school":
          this.showSchool = true;
          break;
        default:
          break;
      }
      //     this.LOAD_DISTRTICTS();
    });
  }
};
</script>

<style>
</style>
