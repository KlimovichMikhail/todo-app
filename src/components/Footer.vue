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
    <div>
      Clear completed
    </div>
  </div>
</template>

<style lang="scss" module scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
}
.tabs {
  display: flex;
}
.tab {
  margin: 0 0.5rem;
  padding: 0.25rem;
}
.tab:hover {
  border: 1px solid $tab-color;
  border-radius: 0.25rem;
}
</style>
