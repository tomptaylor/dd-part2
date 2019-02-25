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
    LOAD_INIT: async function({ commit }, url) {
      //let url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
      let results = await shared.getIT(url);
      commit("CHANGE_CARS", results);
    }
  },
  mutations: {
    CHANGE_CARS: (state, results) => {
      state.states = results;
    }
  }
});

export default store;
