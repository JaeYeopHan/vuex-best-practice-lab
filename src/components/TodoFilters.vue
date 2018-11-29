<template>
  <div>
    <button
      class="filter-button"
      :class="[currentFilter === filterType.ALL ? 'active' : '' ]"
      @click="onClickFilterButtonAll"
    >{{filterType.ALL}}</button>
    <button
      class="filter-button"
      :class="[currentFilter === filterType.DONE ? 'active' : '' ]"
      @click="onClickFilterButtonDone"
    >{{filterType.DONE}}</button>
    <button
      class="filter-button"
      :class="[currentFilter === filterType.ACTIVE ? 'active' : '' ]"
      @click="onClickFilterButtonActive"
    >{{filterType.ACTIVE}}</button>

    <div>
      <span>currentFilter:</span>
      <keep-alive>
        <component :is="currentFilter"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import All from "./filters/TodoFiltersAll.vue";
import Done from "./filters/TodoFiltersDone.vue";
import Active from "./filters/TodoFiltersActive.vue";
import * as todos from "@/store/modules/todos";
import * as actions from "@/store/modules/todos/types";
import { filterType } from "@/constant";

export default {
  data() {
    return { filterType };
  },
  components: {
    All,
    Done,
    Active
  },
  computed: {
    ...todos.mapState({
      currentFilter: ({ views }) => views.currentFilter
    })
    // currentFilter() {
    //   return this.$store.state.todos.views.currentFilter;
    // }
  },
  methods: {
    ...todos.mapActions([
      actions.CHANGE_CURRENT_FILTER_TO_ALL,
      actions.CHANGE_CURRENT_FILTER_TO_DONE,
      actions.CHANGE_CURRENT_FILTER_TO_ACTIVE
    ]),
    onClickFilterButtonAll() {
      this[actions.CHANGE_CURRENT_FILTER_TO_ALL]();
      // this.$store.dispatch("todos/changeCurrentFilterToAll");
      // this.currentFilter = "All";
    },
    onClickFilterButtonDone() {
      this[actions.CHANGE_CURRENT_FILTER_TO_DONE]();
      // this.$store.dispatch("todos/changeCurrentFilterToDone");
      // this.currentFilter = "Done";
    },
    onClickFilterButtonActive() {
      this[actions.CHANGE_CURRENT_FILTER_TO_ACTIVE]();
      // this.$store.dispatch("todos/changeCurrentFilterToActive");
      // this.currentFilter = "Active";
    }
  }
};
</script>

<style scoped>
.filter-button {
  margin: 4px;
}

.active {
  background-color: bisque;
}
</style>

