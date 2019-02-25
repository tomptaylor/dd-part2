<template>
  <div id="app">
    <test :theurl="tom" />
    <dropdown dropDownName="States" :options="$store.state.states" />
    <dropdown dropDownName="Districts" :options="$store.state.districts" />
  </div>
</template>

<script>
import dropdown from "./components/dropdown";
import store from "./store";

export default {
  name: "App",
  components: {
    dropdown
  },
  data() {
    return {
      // computed: {
      //   testData() {
      //     return this.$store.state.cars;
      //   }
      // },
      // watch: {
      //   testData: {
      //     immediate: true,
      //     deep: false,
      //     handler(newValue, oldValue) {
      //       console.log(newValue);
      //     }
      //   }
      // }
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
