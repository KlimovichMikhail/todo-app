<template>
  <div :class="$style.input">
    <input type="text" placeholder="- What needs to be done?" />
  </div>
</template>

<style lang="scss" module scoped>
.input {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $input-color;
  display: flex;
  padding: 0.625rem;
  width: 100%;
}
</style>
