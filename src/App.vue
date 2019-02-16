<template>
  <div id="app">
    <HelloWorld :options="fruitOptions" /> <HelloWorld :options="cars" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      selectedFruit: "Apple",
      fruitOptions: {
        Apple: "Apple",
        Banana: "Banana",
        Blueberry: "Blueberry",
        Kiwi: "Kiwi",
        Pear: "Pear",
        Pineapple: "Pineapple",
        Watermelon: "Watermelon"
      },
      selectedCar: "Mustang",
      cars: {
        Mustang: "Mustang",
        BMW: "BMW",
        Honda: "Honda"
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
