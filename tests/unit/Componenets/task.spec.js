import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Task from '@/components/Task'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('test for Task ', () => {
  let mutations
  let store

  beforeEach(() => {
    mutations = {
      deleteTodo: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })
  it('call "deleteTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(mutations.deleteTodo).toHaveBeenCalled()
  })
  it('contain a Task of input', () => {
    const wrapper = mount(Task, { store, localVue })
    expect(wrapper.find('input')).toBeTruthy()
  })
  it('setChecked', async () => {
    const wrapper = mount(Task, { store, localVue })
    const checkboxInput = wrapper.find('input[type="checkbox"]')
    await checkboxInput.setChecked()
    expect(checkboxInput.element.checked).toBeTruthy()
  })
})
