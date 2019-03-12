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
    schoolsBySelectedDistict: {},
    allSchoolsInState: {},
    showSchool: false,
    showDistricts: true
  },
  actions: {
    ROLESELECTED: function({ commit }, val) {
      commit("SHOW_SCHOOLS");
    },
    LOADALLSCHOOLS: function({ commit }, results) {
      commit("LOAD_ALL_SCHOOLS", results);
    }
  },
  mutations: {
    SHOW_SCHOOLS: (state, results) => {
      state.showSchool = true;
    },
    LOAD_ALL_SCHOOLS: (state, results) => {
      state.allSchoolsInState = results;
    }
  }
});

export default store;
