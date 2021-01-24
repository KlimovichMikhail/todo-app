<template>
  <label :class="$style.tab">
    <input type="radio" name="filter" checked />
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

  input[type="radio"]:checked + span {
    padding: 0.2rem;
    border: 1px solid #ebd8d7;
  }
}
input[type="radio"] {
  display: none;
}
</style>
