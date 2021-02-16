import { shallowMount, createLocalVue } from '@vue/test-utils'
import ToDo from '@/views/Home'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('test for component ToDo', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      getFromStorage: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('render a Title Tasks, Footer, Input', () => {
    const wrapper = shallowMount(ToDo, { store, localVue })
    expect(wrapper.find('Title')).toBeTruthy()
    expect(wrapper.find('Input')).toBeTruthy()
    expect(wrapper.find('Tasks')).toBeTruthy()
    expect(wrapper.find('Footer')).toBeTruthy()
    expect(wrapper.isVisible()).toBe(true)
  })
})
