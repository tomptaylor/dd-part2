<template>
  <div>
    <label>District:</label>
    <select v-model="selectedOption" :disabled="disabled">
      <option value disabled hidden>Select here</option>
      <option v-for="(option, name) in options" :value="option">
        {{
        name
        }}
      </option>
    </select>
  </div>
</template>

<script>
import districts from "./api/districts.js";
import shared from "./shared.js";
import { bus } from "../main";

export default {
  name: "hw",
  props: ["showDistrict"],
  data: function() {
    return {
      disabled: true,
      selectedOption: "test",
      options: {}
    };
  },
  created() {
    bus.$on("usstate_changed", data => {
      this.LOAD_DISTRTICTS();
    });
  },
  watch: {
    selectedOption: function(newval) {
      // TODO - LOAD THE SCHOOLS FOR
      // the watch should fite off the event of the next dd to get
      bus.$emit("GETSCHOOLSBYDIST", newval);
      let obj = {};
      obj.school = newval;
      bus.$emit("ddShow", obj);
    }
  },
  methods: {
    LOAD_DISTRTICTS: function() {
      districts.get().then(options => {
        this.options = options;
        this.disabled = false;
      });
    }
  }
};
</script>
