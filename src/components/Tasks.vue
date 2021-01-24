<template>
  <div>
    <Task v-for="task of TODOS" :key="task.id" :task="task.title" />
  </div>
</template>

<script>
import Task from "./Task";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Task
  },
  computed: mapGetters(["TODOS"]),
  methods: mapActions(["GET_TODO"]),
  async mounted() {
    this.GET_TODO();
  }
};
</script>

<style lang="scss" module></style>
