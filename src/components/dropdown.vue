<template>
  <div class="dropdown">
    <label>{{ dropDownName }}: </label>
    <select v-model="selectedOption" @change="myFunction();">
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";
import shared from "./shared.js";

export default {
  name: "dropdown",
  props: ["dropDownName", "options"],
  data() {
    return {
      selectedOption: null
    };
  },
  watch: {
    selectedOption: function(event) {
      switch (this.dropDownName) {
        case "States":
          break;

        default:
          break;
      }
      //  value: function(newValue) {
      //    this.selectedOption = newValue;
      alert("new selection" + this.dropDownName);
    }
  },
  methods: {},
  actions: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
