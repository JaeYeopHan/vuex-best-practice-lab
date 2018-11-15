<template>
  <todo-layout>

    <todo-title
      msg="TODO APP"
      slot="todo-header"
    >
    </todo-title>

    <todo-container slot="todo-container" />

    <todo-filters slot="todo-filters" />

    <div slot="todo-footer" slot-scope="props">
      Copyright: @{{ props.author }}
    </div>

  </todo-layout>
</template>

<script>
import TodoTitle from "./components/TodoTitle.vue";
import TodoContainer from "./components/TodoContainer.vue";
import TodoFilters from "./components/TodoFilters.vue";
import TodoLayout from "./layout/TodoLayout.vue";

export default {
  components: {
    TodoTitle,
    TodoContainer,
    TodoFilters,
    TodoLayout
  }
};
</script>
