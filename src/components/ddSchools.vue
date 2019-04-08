<template>
  <div>
    <label>School:</label>
    <select v-model="selectedOption" :disabled="this.disabled">
      <option value disabled hidden>Select here</option>
      <option v-for="(option, name) in options" :value="name">
        {{
        option
        }}
      </option>
    </select>
  </div>
</template>

<script>
import schools from "./api/schools.js";
import shared from "./shared.js";
import { bus } from "../main";
import { mapState } from "vuex";

export default {
  name: "schools",
  computed: mapState(["allSchoolsInState"]),
  data: function() {
    return {
      selectedOption: "test",
      options: {},
      disabled: true
    };
  },

  created() {
    bus.$on("GETSCHOOLSBYDIST", data => {
      console.log(data);
      //  this.LOAD_SCHOOLS_4_DISTRICT(data);
      // let temp = {};
      // for (let i in this.allSchoolsInState) {
      //   if (this.allSchoolsInState[i] === data) {
      //       console.log(i.toString());
      //        console.log(this.allSchoolsInState[i]);
      //     temp[i] = i;
      //   }
      // }
      // this.options = temp;
    });
  },
  methods: {
    LOAD_SCHOOLS_4_DISTRICT: function(data) {
      schools.get(data).then(options => {
        this.options = options;
        let obj = {};
        obj.school = newval;
        bus.$emit("ddShow", obj);
      });
    }
  }
};
</script>

