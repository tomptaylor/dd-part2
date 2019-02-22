import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedCar: "",
    cars: {
      Mustang: "1",
      BMW: "BMW",
      Honda: "Honda"
    },
    colors: {
      red: "1",
      white: "white",
      blue: "blue"
    },
    rows: []
  },
  actions: {
    LOAD_INIT: async function({ commit }) {
      let url = "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2";
      let results = await shared.getIT(url);
      console.log(results);
      commit("CHANGE_CARS", results);
    }
  },
  mutations: {
    CHANGE_CARS: (state, results) => {
      console.log(typeof state.colors);
      console.log(Object.values(state.colors));
      state.cars = results;
    }
  }
});

export default store;
