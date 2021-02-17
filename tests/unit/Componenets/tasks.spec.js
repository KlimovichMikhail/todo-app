import { mount, createLocalVue } from '@vue/test-utils'
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
      getFromStorage: jest.fn(),
      changeTaskStatus: jest.fn()
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
  it('call "changeTaskStatus"', () => {
    const wrapper = mount(Tasks, { store, localVue })
    console.log(wrapper.html())
    wrapper.find('input').trigger('change')
    expect(mutations.changeTaskStatus).toHaveBeenCalled()
  })
})
