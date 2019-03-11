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
import { bus } from "../main";

export default {
  name: "ddstate",
  props: ["dropDownName"],
  data: function() {
    return {
      selectedOption: null,
      options: {
        District: "District",
        School: "School"
      }
    };
  },
  created() {
    usstates.get().then(options => {
      this.options = options;
    });
  },
  watch: {
    selectedOption: function(newval) {
      bus.$emit("ROLE_CHANGED", newval);
    }
  }
};
</script>

<style scoped></style>
