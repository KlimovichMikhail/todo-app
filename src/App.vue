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
@import "./assets/variables.scss";
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-size: 100%;
}

.page {
  background-color: $main-color;
  color: $box-color;
  font-family: "Raleway", sans-serif;
}

.list {
  margin: 0 auto;
  height: auto;
  width: 30vw;
  height: auto;
  line-height: 1.8;
  background-color: $list-color;
  box-shadow: 0 0.25rem 0.625rem #36363680;
}
</style>
