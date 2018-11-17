import * as todos from "./types";

// context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}
export default {
  [todos.ADD_ITEM]({ commit }, payload) {
    commit(todos.ADD_ITEM, payload.newItem);
  },
  // addItem(context, payload) {
  //   context.commit("addItem", payload.newItem);
  // },

  [todos.TO_DONE]({ commit }, payload) {
    commit(todos.TO_DONE, payload.index);
  },

  [todos.CHANGE_CURRENT_FILTER_TO_ALL]({ commit }) {
    commit(todos.CHANGE_CURRENT_FILTER_TO_ALL);
  },

  [todos.CHANGE_CURRENT_FILTER_TO_DONE]({ commit }) {
    commit(todos.CHANGE_CURRENT_FILTER_TO_DONE);
  },

  [todos.CHANGE_CURRENT_FILTER_TO_ACTIVE]({ commit }) {
    commit(todos.CHANGE_CURRENT_FILTER_TO_ACTIVE);
  }
};
