import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './store.cfg'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)

describe('tests for store', () => {
  it('set state used action', () => {
    store.dispatch('getFromStorage')
    expect(store.state.todos.length).toBe(0)
  })
  it('addTodo', () => {
    let newTitle = 'newTitle'
    store.commit('addTodo', newTitle)
    expect(store.state.todos[0].title).toBe('newTitle')
    expect(store.state.todos[0].completed).toBe(false)
    expect(store.state.todos[0].id).toBeTruthy()
  })
  it('todosFiltered', () => {
    store.state.filter = 'All'
    expect(store.getters.todosFiltered).toBe(store.state.todos)
    store.state.filter = 'Active'
    expect(store.getters.todosFiltered.length).toBe(1)
    store.state.filter = 'Completed'
    expect(store.getters.todosFiltered.length).toBe(0)
  })
  it('setFilter', () => {
    let newFilter = 'filter'
    store.commit('setFilter', newFilter)
    expect(store.state.filter).toBe(newFilter)
  })
  it('changeTaskStatus', () => {
    let id = store.state.todos[0].id
    let Completed = store.state.todos[0].completed
    store.commit('changeTaskStatus', id)
    expect(store.state.todos[0].completed).toBe(!Completed)
  })
  it('tasksCount', () => {
    expect(store.getters.remaining).toBe(
      store.state.todos.filter(todo => todo.completed === false).length
    )
  })
  it('allTasks', () => {
    expect(store.getters.allTasks).toBe(store.state.todos)
  })
  it('clearCompleted', () => {
    store.commit('clearCompleted')
    expect(store.state.todos).toStrictEqual(
      store.state.todos.filter(task => !task.complete)
    )
  })
  it('deleteTodo', () => {
    let index = 0
    store.commit('deleteTodo', index)
    expect(store.state.todos).toStrictEqual(
      store.state.todos.filter(todo => todo.id !== index)
    )
  })
})
