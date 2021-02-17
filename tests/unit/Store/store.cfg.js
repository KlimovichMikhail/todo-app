import vuex from '@/store/module/todos'

export default {
  state: {
    filter: 'All',
    todos: []
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters
}
