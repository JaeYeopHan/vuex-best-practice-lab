import Vue from "vue";
import {
  ADD_ITEM,
  TO_DONE,
  CHANGE_CURRENT_FILTER_TO_DONE,
  CHANGE_CURRENT_FILTER_TO_ALL,
  CHANGE_CURRENT_FILTER_TO_ACTIVE
} from "./types";
import { filterType } from "../../../constant";

export default {
  [ADD_ITEM](state, newItem) {
    state.items.push(newItem);
  },
  // addItem(state, newItem) {
  //   state.items.push(newItem);
  // },

  [TO_DONE](state, index) {
    state.items[index].isDone = true;
  },

  [CHANGE_CURRENT_FILTER_TO_ALL](state) {
    Vue.set(state.views, "currentFilter", filterType.ALL);
    // state.views.currentFilter = "All";
  },

  [CHANGE_CURRENT_FILTER_TO_DONE](state) {
    Vue.set(state.views, "currentFilter", filterType.DONE);
    // state.views.currentFilter = "Done";
  },

  [CHANGE_CURRENT_FILTER_TO_ACTIVE](state) {
    Vue.set(state.views, "currentFilter", filterType.ACTIVE);
    // state.views.currentFilter = "Active";
  }
};
