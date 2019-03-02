<template>
  <div class="dropdown">
    <label>{{ dropDownName }}: </label>
    <select v-model="selectedOption">
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
    selectedOption: function(val) {
      switch (this.dropDownName) {
        case "States":
          var data = {
            name: "Districts",
            url: "https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a"
          };
          this.$store.dispatch("LOAD_IT", data);
          break;
        case "Districts":
          this.$store.dispatch("GETSCHOOLBYDIST", this.selectedOption);
          break;
        case "Role Level":
          this.$store.state.selectedRoleLevel = val;
          this.$store.dispatch("ROLESELECTED", this.selectedOption);
          break;
        default:
          break;
      }
      //  value: function(newValue) {
      //    this.selectedOption = newValue;
    }
  },
  methods: {},
  actions: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
