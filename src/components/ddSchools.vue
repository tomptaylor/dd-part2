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
import shared from "./shared.js";
import { bus } from "../main";
import { mapState } from "vuex";

export default {
  name: "schools",
  computed: mapState(["allSchoolsInState"]),
  data: function() {
    return {
      selectedOption: "test",
      options: {}
    };
  },

  created() {
    bus.$on("GETSCHOOLSBYDIST", data => {
      let temp = {};
      for (let i in this.allSchoolsInState) {
        if (this.allSchoolsInState[i] === data) {
          //   console.log(i.toString());
          //   console.log(this.allSchoolsInState[i]);
          temp[i] = i;
        }
      }
      this.options = temp;
    });
  },
  methods: {}
};
</script>
