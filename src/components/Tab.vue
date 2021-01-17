<template>
  <label :class="$style.tab">
    <span>{{ tab }}</span>
  </label>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tab: String
  }
};
</script>

<style lang="scss" module>
.tab {
  margin: 0 0.5rem;
  padding: 0.25rem;
}
.tab:hover {
  border: 1px solid $tab-color;
  border-radius: 0.25rem;
}
</style>
