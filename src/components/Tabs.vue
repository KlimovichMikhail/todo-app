<template>
  <div :class="$style.tabs">
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
  cursor: pointer;
  margin: 0.2rem;
}
</style>
