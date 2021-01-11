<template>
  <div :class="$style.page">
    <Title />
    <div :class="$style.list">
      <Input />
      <Tasks />
      <Footer />
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Input from "./components/Input.vue";
import Tasks from "./components/Tasks.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Title,
    Input,
    Tasks,
    Footer
  }
};
</script>

<style lang="scss" module scoped>
@import "./assets/styles.scss";
</style>
