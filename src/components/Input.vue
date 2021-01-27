<template>
  <form :class="$style.input" @submit.prevent="send">
    <input
      type="text"
      placeholder="What's needs to be done?  "
      v-model="newTodo"
    />
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      newTodo: "",
      idForTodo: 2
    };
  },
  methods: {
    ...mapMutations(["ADD_TODO"]),
    send() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.ADD_TODO({
        id: this.idForTodo,
        title: this.newTodo
      });
      this.newTodo = "";
      this.idForTodo++;
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
