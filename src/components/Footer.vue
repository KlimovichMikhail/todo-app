<template>
  <div class="footer">
    <div class="count">
      2 2 left
    </div>
    <span class="tabs">
      <label class="tab">All</label>
      <label class="tab">Active</label>
      <label class="tab">Completed</label>
    </span>
  </div>
</template>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
}
.tabs {
  display: flex;
}
.tab {
  margin: 0 7px;
  padding: 3px;
}
.tab:hover {
  border: 1px solid #afafad;
  border-radius: 3px;
}
</style>
