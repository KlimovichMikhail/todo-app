<template>
  <div class="tasks">
    <input type="checkbox" name="New task 1" /> New task 1
  </div>
  <div class="tasks">
    <input type="checkbox" checked name="New task 2" /><del> New task 2</del>
  </div>
  <div class="tasks">
    <input type="checkbox" name="New task 3" /> New task 3
  </div>
</template>
<style>
.tasks {
  display: block;
  padding: 0.2rem 0;
  border-bottom: 1px solid #c4c4c4;
  font-size: 18px;
}
</style>
