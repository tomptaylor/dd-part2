<template>
  <div>
    <label>District:</label>
    <select v-model="selectedOption">
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
      bus.$emit("GETSCHOOLSBYDIST", newval);
      bus.$emit("ddShow", "school");
    }
  },
  methods: {
    LOAD_DISTRTICTS: function() {
      districts.get().then(options => {
        this.options = options;
      });
      let obj = {};
      obj.dist = "show";
      bus.$emit("ddShow", obj);
    }
  }
};
</script>
