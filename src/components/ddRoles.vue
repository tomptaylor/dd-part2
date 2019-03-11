<template>
  <div class="dropdown">
    <label>Roles: </label>
    <select v-model="selectedOption">
      <option value="" disabled hidden>Select Age</option>
      <option v-for="(option, name) in options" :value="option">{{
        name
      }}</option>
    </select>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  name: "ddRoles",
  prop: "showRole",
  data: function() {
    return {
      selectedOption: null,
      options: {
        District: "District",
        School: "School"
      }
    };
  },
  watch: {
    selectedOption: function(newval) {
      if (newval === "State") {
        bus.$emit("ROLE_CHANGED", newval);
      }
    }
  }
};
</script>

<style scoped></style>
