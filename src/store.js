import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "secret-key":
        "$2a$10$036UXxSL9oiSYBbeDqdNd.frX7BvsGTNNDekEX2iUKfHj7U1p1k6G"
    },
    selectedDistrict: "",
    districts: {},
    schoolsBySelectedDistict: {},
    allSchoolsInDist: {},
    showSchool: false,
    showDistricts: true
  },
  actions: {
    ROLESELECTED: function({ commit }, val) {
      commit("SHOW_SCHOOLS");
    }
  },
  mutations: {
    SHOW_SCHOOLs: (state, results) => {
      state.showSchool = true;
    }
  }
});

export default store;
