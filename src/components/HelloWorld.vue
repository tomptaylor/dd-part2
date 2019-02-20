<template>
  <div class="dropdown">
    <select v-model="selectedOption" @change="myFunction();">
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
    <button v-on:click="getData">Get Data</button>
  </div></template
>

<script>
import { mapState, mapMutations } from "vuex";
import shared from "./shared.js";

export default {
  name: "HelloWorld",
  props: {
    dropDownName: String,
    options: {
      type: Object
    }
  },
  data() {
    return {
      selectedOption: null
    };
  },
  beforeCreate() {
    //shared.getIT("State");
  },
  mounted() {
    this.selectedOption = this.value;
  },

  watch: {
    value: function(newValue) {
      this.selectedOption = newValue;
      alert("new selection");
    }
  },
  methods: {
    ...mapMutations(["CHANGE_CARS"]),
    getData: function(event) {
      alert("hi");
      this.CHANGE_CARS();
    },
    async myFunction(event) {
      this.rows = await shared.getIT("district");
    }
  },
  actions: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
