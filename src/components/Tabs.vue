<template>
  <div :class="$style.tabs">
    <Tab tab="All" status="allTasks" />
    <Tab tab="Active" status="activeTasks" />
    <Tab tab="Completed" status="completedTasks" />
  </div>
</template>

<script>
import Tab from "./Tab";
export default {
  name: "Tabs",
  components: {
    Tab
  }
};
</script>

<style lang="scss" module>
.tabs {
  cursor: pointer;
  margin: 0.2rem;
}
</style>
