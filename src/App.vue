<template>
  <div class="page">
    <Title />
    <div class="=list">
      <Input />
      <Task />
      <Footer />
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Input from "./components/Input.vue";
import Task from "./components/Task.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Title,
    Input,
    Task,
    Footer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
.page {
  background-color: #d1cece;
  color: #6d6d6d;
  font-family: "Raleway", sans-serif;
}
.list {
  margin: 0 auto;
  height: auto;
  width: 30vw;
  height: auto;
  line-height: 1.8;
  background-color: #fff;
  box-shadow: 0 3px 10px #36363680;
}
</style>
