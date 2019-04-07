<template>
  <div class="dropdown">
    <label>Roles:</label>
    <select v-model="selectedOption">
      <option value disabled hidden>Select Age</option>
      <option v-for="(option, name) in options" :value="name">
        {{
        option
        }}
      </option>
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
        District: "District level Security",
        Principle: "Principle",
        Teacher: "Teacher",
        OtherSchLevRole: "Other School Level Role"
      }
    };
  },
  watch: {
    selectedOption: function(newval) {
      let obj = {};
      obj.role = newval;
      bus.$emit("ddShow", obj);
    }
  }
};
</script>

<style scoped></style>
