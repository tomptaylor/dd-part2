import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    rolelevel: {
      District: "District",
      School: "School"
    },
    selectedState: "",
    states: {},
    selectedDistrict: "",
    selectedRoleLevel: "School",
    districts: {},
    schoolsBySelectedDistict: {},
    allSchoolsInDist: {},
    showSchool: false
  },
  actions: {
    ROLESELECTED: function({ commit }, val) {
      if (val == "School") {
        console.log("roleselect, do a mutate");
        commit("SHOW_SCHOOL");
      }
    },
    GETSCHOOLBYDIST: function({ commit }, val) {
      let schoolsBySelectedDistict = {};
      for (let i in store.state.allSchoolsInDist) {
        // console.log(store.state.allSchoolsInDist[i]);
        if (store.state.allSchoolsInDist[i] === val) {
          schoolsBySelectedDistict[i] = i;
          //  console.log("..." + i);
        }
      }
      console.log(schoolsBySelectedDistict);
      commit("CHANGE_SBSELECTED", schoolsBySelectedDistict);
    },
    LOAD_STATES: function({ commit }, data) {},
    LOAD_IT: async function({ commit }, data) {
      let results = await shared.getIT(data.name, data.url);
      switch (data.name) {
        case "States":
          commit("CHANGE_STATES", results);
          break;
        case "Districts":
          let allSchoolsInDist = {};
          for (let i in results) {
            allSchoolsInDist[results[i].school] = results[i].district;
          }
          commit("CHANGE_ALLSCHOOLSINDIST", allSchoolsInDist);
          results = shared.uniqueDistrict(results);
          commit("CHANGE_DISTRICTS", results);
          break;
        default:
          break;
      }
    }
  },
  mutations: {
    SHOW_SCHOOL: (state, results) => {
      state.showSchool = true;
    },
    CHANGE_SBSELECTED: (state, results) => {
      state.schoolsBySelectedDistict = results;
    },
    CHANGE_STATES: (state, results) => {
      state.states = results;
      // state.showSchool = true;
    },
    CHANGE_DISTRICTS: (state, results) => {
      state.districts = results;
    },
    CHANGE_ALLSCHOOLSINDIST: (state, results) => {
      state.allSchoolsInDist = results;
    }
  }
});

export default store;
