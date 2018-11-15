<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
