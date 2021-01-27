<template>
  <!-- <label :class="$style.tab" :name="status" v-on:click="choiceTypeTasks"> -->
  <!-- <input type="radio" name="filter" checked /> -->
  <button :name="status" class="nav-button" v-on:click="choiceTypeTasks">
    <span>{{ tab }}</span>
  </button>
  <!-- </label> -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Tab",
  props: ["tab", "status"],
  methods: {
    ...mapMutations(["changeTypeTasks"]),
    choiceTypeTasks() {
      this.changeTypeTasks(event.target.name);
    }
  }
};
</script>

<style lang="scss" module>
// .tab {
//   margin: 0 0.5rem;
//   padding: 0.25rem;

//   input[type="radio"]:checked + span {
//     padding: 0.2rem;
//     border: 1px solid #ebd8d7;
//   }
// }
// input[type="radio"] {
//   display: none;
// }
.nav-button {
  margin-right: 0.5rem;
  background-color: transparent;
  font-size: 1rem;
  color: #777;
  outline: none;
  border: 0.1rem solid transparent;
  border-radius: 0.2rem;
  cursor: pointer;
}
.nav-button:hover,
.nav-button:focus {
  border: 0.1rem solid red;
  color: black;
}
</style>
