import Input from '@/components/Input'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Input.vue', () => {
  let store
  let mutations

  beforeEach(() => {
    mutations = {
      addTodo: jest.fn()
    }
    store = new Vuex.Store({
      mutations
    })
  })

  it('call "addTodo", when event is "enter"', () => {
    const wrapper = shallowMount(Input, { store, localVue })
    wrapper.find('input').trigger('submit.prevent')
    expect(mutations.addTodo).toHaveBeenCalled()
  })
})

describe('unit tests for Input', () => {
  const wrapper = mount(Input)

  test('render a input', () => {
    expect(wrapper.find('input')).toBeTruthy(),
      expect(wrapper.isVisible()).toBe(true)
  })

  test('setData', async () => {
    await wrapper.setData({ newTodo: 'newTodo1' })
    expect(wrapper.vm.newTodo).toBe('newTodo1')
  })
})

describe('unit tests for input', () => {
  const wrapper = mount(Input)

  test('setValue to input', async () => {
    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('some value')
    expect(wrapper.find('input[type="text"]').element.value).toBe('some value')
  })
})
