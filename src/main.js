// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import shared from "./components/shared";
import { mapState } from "vuex";

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App/>",
  beforeCreate() {
    console.log("in app create");
    // `1` is the ID of the book we want to fetch.
    this.$store.dispatch("fetchBook", 1);
    this.$store.dispatch("fetchBookList");
  }
});
