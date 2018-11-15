<template>
    <input
      type="text"
      class="todo-input"
      @keydown.enter="addItem"
      placeholder="Enter the item."
    />
</template>

<script>
export default {
  name: "TodoInput",
  props: {
    addItem: {
      type: Function,
      required: true
    }
  }
};
</script>


<style scoped>
.todo-input {
  width: 240px;
  height: 36px;
  border: 2px solid #42b983;
  font-size: 16px;
  padding-left: 12px;
}
</style>
