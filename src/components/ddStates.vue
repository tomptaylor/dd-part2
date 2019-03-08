<template>
  <div class="dropdown">
    <label>{{ dropDownName }}: </label>
    <select v-model="selectedOption">
      <option value="" disabled hidden>Select Age</option>
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";
//import { states } from "./api/states.js";
import usstates from "./api/states.js";

export default {
  name: "ddstate",
  props: ["dropDownName"],
  data: function() {
    return {
      selectedOption: null,
      options: { you: "me" }
    };
  },
  // beforeCreate() {
  //   this.$store.dispatch('getRegisteredCourses')
  // },
  created() {
    usstates.get().then(options => {
      this.options = options;
    });
  },
  actions: {
    async actionA({ commit }) {
      let results = usstates.get();
      commit("CHANGE_STATES", results);
    }
  },
  mutations: {
    CHANGE_STATES: (state, results) => {
      this.options = results;
    }
  },
  watch: {
    selectedOption: function(val) {
      var data = {
        name: "Districts",
        url: "https://api.jsonbin.io/b/5c3ec57f05d34b26f20aa54a"
      };
      this.$store.dispatch("LOAD_IT", data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
