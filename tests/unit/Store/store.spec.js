import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store.cfg'
import { cloneDeep } from 'lodash'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(cloneDeep(storeConfig))

describe('unit tests for getters state', () => {
  test('get state and filter', () => {
    let newTodo = 'newTodo1'
    store.commit('addTodo', newTodo)

    store.state.filter = 'All'
    expect(store.getters.todosFiltered).toBe(store.state.todos)
    store.state.filter = 'Active'
    expect(store.getters.todosFiltered.length).toBe(1)
    store.state.filter = 'Completed'
    expect(store.getters.todosFiltered.length).toBe(0)
  })
})
