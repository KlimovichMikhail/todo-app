<template>
  <label :class="$style.task">
    <input type="checkbox" />
    <i></i>
    <span>{{ task }}</span>
  </label>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: String
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
    border-top: 1px solid #e6e6e6;
  }
  input {
    display: none;
  }
  span {
    flex: 1;
    font-size: 1.3rem;
    font-weight: 100;
  }
  i {
    position: relative;
    margin-right: 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
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
    border: 2px solid #ffffff;
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
  input[type="checkbox"]:checked ~ span {
    text-decoration: line-through;
    color: #c8c8c8;
  }
}
</style>
