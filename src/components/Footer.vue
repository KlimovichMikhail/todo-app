<template>
  <div :class="$style.footer">
    <div>{{ remaining }} left</div>
    <Tab :options="filters" v-model="filter" />
    <div :class="$style.clear" @click="clearCompleted">
      Clear completed
    </div>
  </div>
</template>

<script>
import Tab from './Tab'

export default {
  data() {
    return {
      filters: ['All', 'Active', 'Completed']
    }
  },
  computed: {
    remaining() {
      return this.$store.getters.remaining
    },
    filter: {
      get() {
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('setFilter', value)
      }
    }
  },
  components: {
    Tab
  },
  methods: {
    clearCompleted() {
      this.$store.commit('clearCompleted')
    }
  }
}
</script>

<style lang="scss" module>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  flex-wrap: wrap;
  border-top: 1px solid $task-color;
  color: $tab-color;
  font-size: 15px;
}
.clear {
  cursor: pointer;
}
</style>
