import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
    }
  },
  mutations: {
    CHANGE_CARS: state => {
      console.log(state.colors);
      state.cars = state.colors;
    }
  },
  actions: {
    getStateList({ commit }) {}
  }
});
