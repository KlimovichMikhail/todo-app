import vuex from '@/store/index'

export default {
  state: {
    filter: 'All',
    todos: []
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters
}
