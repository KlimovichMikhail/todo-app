<template>
  <div :class="$style.footer">
    <div>{{ remaining }} left</div>
    <Tabs />
    Clear completed
  </div>
</template>

<script>
import Tabs from "./Tabs";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["remaining"]),
  components: {
    Tabs
  }
};
</script>

<style lang="scss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  flex-wrap: wrap;
  border-top: 1px solid #e6e6e6;
  color: #a0a0a0;
}
</style>
