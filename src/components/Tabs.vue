<template>
  <div :class="$style.tabs">
    <Tab
      v-for="tab of allTabs"
      :key="tab.id"
      :tab="tab.tabText"
      :checked="tab.selected"
      :tabId="tab.id"
      :tabState="tab.tabName"
    />
  </div>
</template>

<script>
import Tab from "./Tab";
import { mapGetters } from "vuex";
export default {
  name: "Tabs",
  computed: mapGetters(["allTabs"]),
  components: {
    Tab
  }
};
</script>

<style lang="scss" module>
.tabs {
  display: flex;
}
</style>
