<template>
  <label :class="$style.tab" v-for="tab in tabs" :key="tab">
    <input
      type="radio"
      name="filter"
      :value="tab"
      @change="$emit('input', tab)"
      :checked="tab === value"
    />
    <span>{{ tab }}</span>
  </label>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabs: Array,
    value: String
  }
};
</script>

<style lang="scss" module>
.tab {
  cursor: pointer;
  span {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }
  input[type="radio"]:checked + span {
    padding: 0.2rem;
    border: 1px solid $border-color;
  }
  input[type="radio"] {
    display: none;
  }
}
</style>
