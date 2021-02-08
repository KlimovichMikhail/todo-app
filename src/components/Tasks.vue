<template>
  <div>
    <Task
      v-for="todo of todosFiltered"
      :key="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      :id="todo.id"
      @change="e => setTask(todo.id, e.target.checked)"
    />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    Task
  },
  computed: mapGetters(["todosFiltered"]),
  methods: {
    ...mapMutations(["changeTaskStatus"]),
    setTask(id, value) {
      this.changeTaskStatus({ id, value });
    }
  }
};
</script>

<style lang="scss" module></style>
