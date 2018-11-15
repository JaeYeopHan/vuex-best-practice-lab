import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";

const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos
  },
  strict: debug
});
