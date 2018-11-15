<template>
  <div>
    <todo-input
      :addItem="addItem"
    />
    <ul class="todo-list">
      <todo-item
        v-for="(todo, index) in todos" :key="index"
        :todo='todo'
        :toCompleteItem='toCompleteItem'
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoInput from "./TodoInput.vue";
import { mapActions, mapState, mapGetters } from "@/store/modules/todos";
import { todosMappedGetters } from "@/store/modules/todos/getters";
import { ADD_ITEM, TO_DONE } from "@/store/modules/todos/types";
import { filterType } from "@/constant";

export default {
  components: {
    TodoInput,
    TodoItem
  },
  computed: {
    ...mapState({
      currentFilterView: ({ views }) => views.currentFilter,
      allItems: ({ items }) => items
    }),
    ...mapGetters({ ...todosMappedGetters }),
    // ...mapGetters({
    //   doneItems: "doneItems",
    //   activeItems: "activeItems"
    // }),
    // currentFilterView() {
    //   return this.$store.state.todos.views.currentFilter;
    //   return this.$store.state["todos/views/currentFilter"]; (x)
    // },
    // allItems() {
    //   return this.$store.state.todos.items;
    // },
    // doneItems() {
    //   return this.$store.getters["todos/doneItems"];
    //   // return this.$store.getters.todos.doneItems; (x)
    // },
    // activeItems() {
    //   return this.$store.getters["todos/activeItems"];
    // },
    todos() {
      if (this.currentFilterView === filterType.ALL) {
        return this.allItems;
      }
      if (this.currentFilterView === filterType.DONE) {
        return this.doneItems;
      }
      if (this.currentFilterView === filterType.ACTIVE) {
        return this.activeItems;
      }
    }
  },

  methods: {
    ...mapActions([ADD_ITEM, TO_DONE]),
    toCompleteItem(event, todo) {
      this[TO_DONE]({
        index: this.todos.indexOf(todo)
      });
    },

    addItem(event) {
      if (event.target.value.trim() === "") {
        event.target.value = "";
        return;
      }
      const newItem = {
        content: event.target.value,
        isDone: false
      };
      this[ADD_ITEM]({ newItem });
      // this.$store.dispatch("todos/addItem", {
      //   newItem: {
      //     content: event.target.value,
      //     isDone: false
      //   }
      // });
      event.target.value = "";
    }
  }
};
</script>

<style scoped>
.todo-list {
  margin-top: 20px;
  padding-left: 0px;
}
</style>
