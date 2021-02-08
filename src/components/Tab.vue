<template>
  <div :class="$style.tabs">
    <label :class="$style.tab" v-for="option in options" :key="option">
      <input
        type="radio"
        name="filter"
        :value="option"
        :checked="modelValue === option"
        @change="$emit('update:modelValue', option)"
      />
      <span>{{ option }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    options: Array,
    modelValue: String
  }
};
</script>

<style lang="scss" module>
.tabs {
  display: flex;
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
}
</style>
