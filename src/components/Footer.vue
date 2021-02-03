<template>
  <div :class="$style.footer">
    <div>{{ remaining }} left</div>
    <Tabs />
    <div :class="$style.clear" @click="clearCompleted">
      Clear completed
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["remaining"]),
  components: {
    Tabs
  },
  methods: {
    clearCompleted() {
      this.$store.commit("clearCompleted");
    }
  }
};
</script>

<style lang="scss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  flex-wrap: wrap;
  border-top: 1px solid $task-color;
  color: $tab-color;
  font-size: 15px;
}
.clear {
  cursor: pointer;
}
</style>
