// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import shared from "./components/shared";
import { mapState, mapMutations } from "vuex";

Vue.config.productionTip = false;
/* eslint-disable no-new */
export const bus = new Vue();
new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>"
  // created() {
  //   var data = {
  //     name: "States",
  //     url: "https://api.jsonbin.io/b/5c514fa04c4430170a939bd9/2"
  //   };
  //   this.$store.dispatch("LOAD_IT", data);
  // }
});
