import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedState: "",
    states: {},
    selectedDistrict: "",
    district: {}
  },
  actions: {
    LOAD_IT: async function({ commit }, data) {
      let results = await shared.getIT(data.url);
      console.log(data.name);
      switch (data.name) {
        case "States":
          commit("CHANGE_STATES", results);
          break;
        default:
          break;
      }
    }
  },
  mutations: {
    CHANGE_STATES: (state, results) => {
      state.states = results;
    }
  }
});

export default store;
