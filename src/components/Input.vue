<template>
  <form :class="$style.input" id="formEnter" v-on:keyup.enter="send">
    <input
      id="inputText"
      type="text"
      :class="$style.newTodo"
      v-focus
      placeholder="What's
    needs to be done? "
      v-model="newTodo"
    />
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    send() {
      this.$store.commit('addTodo', this.newTodo)
      this.newTodo = ''
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  }
}
</script>
<style lang="scss" module>
.input {
  display: flex;
  width: 100%;
  border-bottom: 1px solid $task-color;
  padding: 20px;
}
input[type='text'] {
  font-family: 'Helvetica Neue';
  font-size: 1.5rem;
  font-weight: 100;
  font-style: italic;
  border: 0;
  width: 100%;
  outline: none;
  color: $box-color;
}
</style>
