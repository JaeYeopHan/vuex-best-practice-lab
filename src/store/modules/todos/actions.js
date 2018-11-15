import {
  ADD_ITEM,
  TO_DONE,
  CHANGE_CURRENT_FILTER_TO_ALL,
  CHANGE_CURRENT_FILTER_TO_DONE,
  CHANGE_CURRENT_FILTER_TO_ACTIVE
} from "./types";

// context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}
export default {
  [ADD_ITEM]({ commit }, payload) {
    commit(ADD_ITEM, payload.newItem);
  },
  // addItem(context, payload) {
  //   context.commit("addItem", payload.newItem);
  // },

  [TO_DONE]({ commit }, payload) {
    commit(TO_DONE, payload.index);
  },

  [CHANGE_CURRENT_FILTER_TO_ALL]({ commit }) {
    commit(CHANGE_CURRENT_FILTER_TO_ALL);
  },

  [CHANGE_CURRENT_FILTER_TO_DONE]({ commit }) {
    commit(CHANGE_CURRENT_FILTER_TO_DONE);
  },

  [CHANGE_CURRENT_FILTER_TO_ACTIVE]({ commit }) {
    commit(CHANGE_CURRENT_FILTER_TO_ACTIVE);
  }
};
