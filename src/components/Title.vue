<template>
  <H1 :class="$style.title">todos</H1>
</template>

<style lang="scss" module scoped>
@import "../assets/variables.scss";
.title {
  font-size: 6.25rem;
  text-align: center;
  margin: 0 0 1.25rem 0;
  color: $title-color;
}
</style>
