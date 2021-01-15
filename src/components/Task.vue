<template>
  <label :class="$style.tasks">
    <input class="$style.text-input" type="checkbox" />
    <span>{{ task }}</span
    ><br />
  </label>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: String
  }
};
</script>

<style lang="scss" module scoped>
.text-input {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 1.125rem;
  border: 0;
  outline: 0;
  flex: 1;
}
</style>
