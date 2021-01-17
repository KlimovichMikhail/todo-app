<template>
  <div class="tabs">
    <Tab v-for="tab of tabs" :key="tab" :tab="tab" />
  </div>
</template>

<script>
import Tab from "./Tab";
export default {
  props: {
    tabs: Array
  },
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
