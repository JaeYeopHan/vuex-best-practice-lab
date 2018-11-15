import Vue from "vue";

export const TO_DONE = "TO_DONE";

export default {
  namespaced: true,
  state: {
    items: [
      {
        content: "포스트 올리기",
        isDone: false
      },
      {
        content: "발표 준바하기",
        isDone: true
      },
      {
        content: "이사하기",
        isDone: false
      },
      {
        content: "FECONF 준바하기",
        isDone: false
      },
      {
        content: "FECONF 회고하기",
        isDone: false
      }
    ],
    views: {
      currentFilter: "All"
    }
  },
  getters: {
    doneItems: state => state.items.filter(todo => todo.isDone),
    activeItems: state => state.items.filter(todo => !todo.isDone)
  },

  // context === {dispatch: ƒ, commit: ƒ, getters: {…}, state: {…}, rootGetters: {…},…}
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload.newItem);
    },
    toDone(context, payload) {
      context.commit("toDone", payload.index);
    },
    // [TO_DONE]({ commit }, idx) {
    //   commit(TO_DONE, idx);
    // }
    changeCurrentFilterToAll(context) {
      context.commit("changeCurrentFilterToAll");
    },
    changeCurrentFilterToDone(context) {
      context.commit("changeCurrentFilterToDone");
    },
    changeCurrentFilterToActive(context) {
      context.commit("changeCurrentFilterToActive");
    }
  },

  mutations: {
    addItem(state, newItem) {
      state.items.push(newItem);
    },
    toDone(state, index) {
      state.items[index].isDone = true;
    },
    // [TO_DONE](state, idx) {
    //   state.items[idx].isDone = true;
    // },
    toReset: state => idx => (state.items[idx].isDone = false),
    changeCurrentFilterToAll(state) {
      Vue.set(state.views, "currentFilter", "All");
      // state.views.currentFilter = "All";
    },
    changeCurrentFilterToDone(state) {
      Vue.set(state.views, "currentFilter", "Done");
      // state.views.currentFilter = "Done";
    },
    changeCurrentFilterToActive(state) {
      state.views.currentFilter = "Active";
    }
  }
};
