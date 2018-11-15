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
// import { TO_DONE } from "../store/modules/todos";

export default {
  name: "todo-list",
  components: {
    TodoInput,
    TodoItem
  },
  computed: {
    currentFilterView() {
      return this.$store.state.todos.views.currentFilter;
    },
    allItems() {
      return this.$store.state.todos.items;
    },
    doneItems() {
      return this.$store.getters["todos/doneItems"];
    },
    activeItems() {
      return this.$store.getters["todos/activeItems"];
    },
    todos() {
      if (this.currentFilterView === "All") {
        return this.allItems;
      }
      if (this.currentFilterView === "Done") {
        return this.doneItems;
      }
      if (this.currentFilterView === "Active") {
        return this.activeItems;
      }
    }
  },

  methods: {
    toCompleteItem(event, todo) {
      this.$store.dispatch("todos/toDone", {
        index: this.todos.indexOf(todo)
      });
    },

    addItem: function(event) {
      if (event.target.value.trim() === "") {
        event.target.value = "";
        return;
      }
      this.$store.dispatch("todos/addItem", {
        newItem: {
          content: event.target.value,
          isDone: false
        }
      });
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
