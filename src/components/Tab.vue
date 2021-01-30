<template>
  <label :class="$style.tab">
    <input
      type="radio"
      @click="changeTab(), changeFilter()"
      :checked="checked"
      :name="tabState"
    />
    <span>{{ tab }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Tab",
  props: {
    tab: String,
    checked: Boolean,
    tabId: Number,
    tabState: String
  },

  methods: {
    ...mapMutations(["tabChange", "updateFilter"]),
    changeFilter() {
      this.updateFilter(this.tabState);
    },
    changeTab() {
      this.tabChange(this.tabId);
    }
  }
};
</script>

<style lang="scss" module>
.tab {
  cursor: pointer;
  span {
    margin: 0 0.5rem;
    padding: 0.25rem;
  }
  input[type="radio"]:checked + span {
    padding: 0.2rem;
    border: 1px solid $border-color;
  }
  input[type="radio"] {
    display: none;
  }
}
</style>
