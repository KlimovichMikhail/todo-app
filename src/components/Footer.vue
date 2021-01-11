<template>
  <div :class="$style.footer">
    <div :class="$style.count">
      2 2 left
    </div>
    <span :class="$style.tabs">
      <label :class="$style.tab">All</label>
      <label :class="$style.tab">Active</label>
      <label :class="$style.tab">Completed</label>
    </span>
  </div>
</template>

<style lang="scss" module scoped>
@import "../assets/styles.scss";
</style>
