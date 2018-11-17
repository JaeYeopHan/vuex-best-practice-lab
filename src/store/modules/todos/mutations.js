import Vue from "vue";
import * as todos from "./types";
import { filterType } from "../../../constant";

export default {
  [todos.ADD_ITEM](state, newItem) {
    state.items.push(newItem);
  },
  // addItem(state, newItem) {
  //   state.items.push(newItem);
  // },

  [todos.TO_DONE](state, index) {
    state.items[index].isDone = true;
  },

  [todos.CHANGE_CURRENT_FILTER_TO_ALL](state) {
    Vue.set(state.views, "currentFilter", filterType.ALL);
    // state.views.currentFilter = "All";
  },

  [todos.CHANGE_CURRENT_FILTER_TO_DONE](state) {
    Vue.set(state.views, "currentFilter", filterType.DONE);
    // state.views.currentFilter = "Done";
  },

  [todos.CHANGE_CURRENT_FILTER_TO_ACTIVE](state) {
    Vue.set(state.views, "currentFilter", filterType.ACTIVE);
    // state.views.currentFilter = "Active";
  }
};
