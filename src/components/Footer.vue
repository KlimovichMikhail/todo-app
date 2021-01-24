<template>
  <div :class="$style.footer">
    <div>
      2 2 left
    </div>
    <Tabs :tabs="tabs" />
    <div>
      Clear completed
    </div>
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  data: () => ({
    tabs: ["All", "Active", "Completed"]
  }),
  components: {
    Tabs
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
  border-top: 1px solid #e6e6e6;
  color: #a0a0a0;
}
</style>
