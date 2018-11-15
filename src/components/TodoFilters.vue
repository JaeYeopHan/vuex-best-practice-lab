<template>
    <div>
        <button
          class="filter-button"
          :class="[currentFilterView === filterType.ALL ? 'active' : '' ]"
          @click="onClickFilterButtonAll">
            {{filterType.ALL}}
        </button>
        <button
            class="filter-button"
            :class="[currentFilterView === filterType.DONE ? 'active' : '' ]"
            @click="onClickFilterButtonDone">
            {{filterType.DONE}}
        </button>
        <button
            class="filter-button"
            :class="[currentFilterView === filterType.ACTIVE ? 'active' : '' ]"
            @click="onClickFilterButtonActive">
            {{filterType.ACTIVE}}
        </button>

        <div>
            <span>currentFilter:</span>
            <keep-alive>
                <component :is="currentFilterView"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import All from "./filters/TodoFiltersAll.vue";
import Done from "./filters/TodoFiltersDone.vue";
import Active from "./filters/TodoFiltersActive.vue";
import { mapActions, mapState } from "@/store/modules/todos";
import {
  CHANGE_CURRENT_FILTER_TO_ALL,
  CHANGE_CURRENT_FILTER_TO_DONE,
  CHANGE_CURRENT_FILTER_TO_ACTIVE
} from "@/store/modules/todos/types";
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
    ...mapState({
      currentFilterView: ({ views }) => views.currentFilter
    })
    // currentFilterView() {
    //   return this.$store.state.todos.views.currentFilter;
    // }
  },
  methods: {
    ...mapActions([
      CHANGE_CURRENT_FILTER_TO_ALL,
      CHANGE_CURRENT_FILTER_TO_DONE,
      CHANGE_CURRENT_FILTER_TO_ACTIVE
    ]),
    onClickFilterButtonAll() {
      this[CHANGE_CURRENT_FILTER_TO_ALL]();
      // this.$store.dispatch("todos/changeCurrentFilterToAll");
      // this.currentFilterView = "All";
    },
    onClickFilterButtonDone() {
      this[CHANGE_CURRENT_FILTER_TO_DONE]();
      // this.$store.dispatch("todos/changeCurrentFilterToDone");
      // this.currentFilterView = "Done";
    },
    onClickFilterButtonActive() {
      this[CHANGE_CURRENT_FILTER_TO_ACTIVE]();
      // this.$store.dispatch("todos/changeCurrentFilterToActive");
      // this.currentFilterView = "Active";
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

