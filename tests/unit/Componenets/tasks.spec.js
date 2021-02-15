import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Tasks from '@/components/Tasks'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

let mutations
let store
let getters

describe('test for component Task', () => {
  beforeEach(() => {
    mutations = {
      getFromStorage: jest.fn()
    }
    getters = {
      todosFiltered: () => [
        {
          id: '1',
          title: 'newTitle1',
          completed: false
        },
        {
          id: '2',
          title: 'newTitle2',
          completed: false
        }
      ]
    }
    store = new Vuex.Store({
      mutations,
      getters
    })
  })

  it('render a Task', () => {
    const wrapper = mount(Tasks, { store, localVue })
    expect(wrapper.find('Task')).toBeTruthy()
    expect(wrapper.isVisible()).toBe(true)
  })
})
describe('unit tests for Task', () => {
  test('contain a Task', () => {
    const wrapper = shallowMount(Tasks, { store, localVue })
    expect(wrapper.find('div')).toBeTruthy()
  })

  test('contain a Task of input', () => {
    const wrapper = shallowMount(Tasks, { store, localVue })
    expect(wrapper.find('input')).toBeTruthy()
  })
})
describe('unit tests for Task input type checked', () => {
  test('setChecked', async () => {
    const wrapper = mount(Tasks, { store, localVue })
    const checkboxInput = wrapper.find('input[type="checkbox"]')
    await checkboxInput.setChecked()
    expect(checkboxInput.element.checked).toBeTruthy()
  })
})
