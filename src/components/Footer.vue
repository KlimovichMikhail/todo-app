<template>
  <div :class="$style.footer">
    <div :class="$style.count">
      2 2 left
    </div>
    <span :class="$style.tabs">
      <Tab v-for="tab of tabs" :key="tab" :tab="tab.tab" />
    </span>
    <div>
      Clear completed
    </div>
  </div>
</template>

<script>
import Tab from "./Tab";
export default {
  data: () => ({
    tabs: [
      {
        tab: "All"
      },
      {
        tab: "Active"
      },
      {
        tab: "Completed"
      }
    ]
  }),
  components: {
    Tab
  }
};
</script>
<style lang="scss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}
.tabs {
  display: flex;
}
</style>
