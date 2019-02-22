import Vue from "vue";
import Vuex from "vuex";
import shared from "./components/shared.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedCar: "",
    cars: {
      Mustang: "Mustang",
      BMW: "BMW",
      Honda: "Honda"
    },
    colors: {
      red: "red",
      white: "white",
      blue: "blue"
    },
    rows: []
  },
  actions: {
    LOAD_INIT: function({ commit }) {
      commit("CHANGE_CARS");
    }
  },
  mutations: {
    CHANGE_CARS: state => {
      console.log(state.colors);
      alert("p");
      state.cars = state.colors;
    }
  }
});

export default store;
