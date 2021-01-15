<template>
  <div :class="$style.tasks">
    <Task v-for="task of tasks" :key="task" :task="task.task" />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  data: () => ({
    tasks: [
      {
        task: "New Task 1"
      },
      {
        task: "New Task 2"
      },
      {
        task: "New Task 3"
      }
    ]
  }),
  components: {
    Task
  }
};
</script>

<style lang="scss" module scoped>
.tasks {
  display: block;
  padding: 0.2rem 0;
  border-bottom: 0.06rem solid $task-color;
  font-size: 1.125rem;
}
</style>
