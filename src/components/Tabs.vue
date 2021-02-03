<template>
  <div :class="$style.tabs">
    <Tab :tabs="filters" v-model="filter" />
  </div>
</template>

<script>
import Tab from "./Tab";
export default {
  name: "Tabs",
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  },
  computed: {
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("setFilter", value);
      }
    }
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
