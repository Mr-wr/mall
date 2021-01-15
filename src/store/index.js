import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { cartModule } from "./cart";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cartModule
  }
});
