<template>
  <div>
    <label :class="$style.task">
      <input
        type="checkbox"
        :checked="completed"
        @change="e => $emit('change', e)"
        :id="id"
      />
      <i></i>
      <span :class="$style.title">{{ title }}</span>
      <span :class="$style.remove" @click="removeTodo(id)">
        &times;
      </span>
    </label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Task",
  props: {
    title: String,
    completed: Boolean,
    id: String
  },
  methods: {
    ...mapMutations(["deleteTodo"]),
    removeTodo(id) {
      this.deleteTodo(id);
    }
  }
};
</script>

<style lang="scss" module>
.task {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;

  + .task {
    border-top: 1px solid $task-color;
  }
  input {
    display: none;
  }
  .title {
    width: 30rem;
    font-size: 1.3rem;
    font-weight: 100;
  }
  i {
    position: relative;
    margin-right: 1rem;
    background-color: $background;
    border: 1px solid $border-color;
    border-radius: 50%;
    height: 1.75rem;
    width: 1.75rem;
  }
  i:after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: 0.45rem;
    opacity: 0;
    border: 2px solid $border-color;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    width: 0.75rem;
    height: 0.375rem;
  }
  input[type="checkbox"]:checked + i {
    border-color: #66bb6a;
  }
  input[type="checkbox"]:checked + i:after {
    opacity: 1;
    border-color: #66bb6a;
  }
  input[type="checkbox"]:checked ~ .title {
    text-decoration: line-through;
    color: #c8c8c8;
  }
  .remove {
    cursor: pointer;
    box-sizing: content-box;
    width: 10px;
    &:hover {
      color: black;
    }
  }
}
</style>
