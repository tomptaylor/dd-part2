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
});
