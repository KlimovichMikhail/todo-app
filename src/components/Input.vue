<template>
  <form :class="$style.input" @submit.prevent="send">
    <input
      type="text"
      placeholder="What's needs to be done?  "
      v-model="title"
    />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapMutations(["ADD_TODO"]),
    send() {
      this.ADD_TODO({
        title: this.title
      });
      this.title = "";
    }
  }
};
</script>
<style lang="scss" module>
.input {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  padding: 20px;
}
input[type="text"] {
  font-family: "Helvetica Neue";
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
  border: 0;
  width: 100%;
  outline: none;
  color: #505050;
}
</style>
