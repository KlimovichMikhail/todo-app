<template>
  <div>
    <Task
      v-for="todo of todosFiltered"
      :key="todo.id"
      :title="todo.title"
      :checked="todo.completed"
      :id="todo.id"
    />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters } from "vuex";
export default {
  components: {
    Task
  },
  computed: mapGetters(["todosFiltered"])
};
</script>

<style lang="scss" module></style>
