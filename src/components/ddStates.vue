<template>
  <div class="dropdown">
    <label>{{ dropDownName }}:</label>
    <select v-model="selectedOption" :disabled="disabled">
      <option value disabled hidden>Select Age</option>
      <option v-for="(option, name) in options" :value="option">
        {{
        name
        }}
      </option>
    </select>
  </div>
</template>

<script>
import { bus } from "../main";
import usstates from "./api/states.js";

export default {
  name: "ddstate",
  props: ["dropDownName"],
  data: function() {
    return {
      disabled: true,
      selectedOption: null,
      options: {}
    };
  },
  created() {
    usstates.get().then(options => {
      this.options = options;
      this.disabled = false;
    });
  },
  watch: {
    selectedOption: function(newval) {
      let obj = {};
      obj.state = newval;
      bus.$emit("ddShow", obj);
      bus.$emit("usstate_changed", newval);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
