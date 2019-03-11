<template>
  <div>
    <label> School: </label>
    <select v-model="selectedOption">
      <option value="" disabled hidden>Select here</option>
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
  </div>
</template>

<script>
import states from "../api/districts.js";
import shared from "./shared.js";
import { bus } from "../main";

export default {
  name: "hw",
  data: function() {
    return {
      selectedOption: "test",
      options: {}
    };
  },
  created() {
    this.options = { you: "me" };
    bus.$on("usstate_changed", data => {
      this.LOAD_DISTRTICTS();
    });
  },

  methods: {
    ROLE_CHANGED: function() {
      districts.get().then(options => {
        console.log(options);

        // let allSchoolsInDist = {};
        // for (let i in results) {
        //   allSchoolsInDist[results[i].school] = results[i].district;
        // }
        // commit("CHANGE_ALLSCHOOLSINDIST", allSchoolsInDist);
        this.options = shared.uniqueDistrict(options);
      });
    }
  }
};
</script>
