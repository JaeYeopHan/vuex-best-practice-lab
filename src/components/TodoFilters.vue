<template>
    <div>
        <button
          class="filter-button"
          :class="[currentFilterView === 'All' ? 'active' : '' ]"
          @click="onClickFilterButtonAll">
            All
        </button>
        <button
            class="filter-button"
            :class="[currentFilterView === 'Done' ? 'active' : '' ]"
            @click="onClickFilterButtonDone">Done
        </button>
        <button
            class="filter-button"
            :class="[currentFilterView === 'Active' ? 'active' : '' ]"
            @click="onClickFilterButtonActive">Active
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

export default {
  components: {
    All,
    Done,
    Active
  },
  computed: {
    currentFilterView() {
      return this.$store.state.todos.views.currentFilter;
    }
  },
  methods: {
    onClickFilterButtonAll: function() {
      this.$store.dispatch("todos/changeCurrentFilterToAll");
      // this.currentFilterView = "All";
    },
    onClickFilterButtonDone: function() {
      this.$store.dispatch("todos/changeCurrentFilterToDone");
      // this.currentFilterView = "Done";
    },
    onClickFilterButtonActive: function() {
      this.$store.dispatch("todos/changeCurrentFilterToActive");
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

