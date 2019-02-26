import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedState: "",
    states: {},
    selectedDistrict: "",
    districts: {}
  },
  actions: {
    LOAD_IT: async function({ commit }, data) {
      let results = await shared.getIT(data.name, data.url);
      switch (data.name) {
        case "States":
          commit("CHANGE_STATES", results);
          break;
        case "Districts":
          commit("CHANGE_DISTRICTS", results);
          break;
        default:
          break;
      }
    }
  },
  mutations: {
    CHANGE_STATES: (state, results) => {
      state.states = results;
    },
    CHANGE_DISTRICTS: (state, results) => {
      state.districts = results;
    }
  }
});

export default store;
