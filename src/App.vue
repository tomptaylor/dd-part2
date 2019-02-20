<template>
  <div id="app">
    <HelloWorld :dropDownName="fruit" :options="fruitOptions" />
    <HelloWorld :dropDownName="cars" :options="$store.state.cars" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import store from "./store";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      selectedFruit: "Apple",
      fruitOptions: {
        "New York": 1,
        Coloardo: 2,
        Blueberry: "Blueberry",
        Kiwi: "Kiwi",
        Pear: "Pear",
        Pineapple: "Pineapple",
        Watermelon: "Watermelon"
      },
      computed: {
        testData() {
          return this.$store.state.cars;
        }
      },
      watch: {
        testData: {
          immediate: true,
          deep: false,
          handler(newValue, oldValue) {
            console.log(newValue);
          }
        }
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
