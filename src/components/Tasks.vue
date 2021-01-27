<template>
  <div>
    <Task v-for="todo of TODOS" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters } from "vuex";
export default {
  components: {
    Task
  },
  computed: mapGetters(["TODOS"])
};
</script>

<style lang="scss" module></style>
