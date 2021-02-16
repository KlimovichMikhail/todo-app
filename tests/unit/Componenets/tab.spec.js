import Tab from '@/components/Tab'
import { shallowMount } from '@vue/test-utils'

describe('unit tests in Tab.vue', () => {
  const wrapper = shallowMount(Tab, {
    propsData: {
      options: [],
      value: 'All'
    }
  })

  test('props in input', () => {
    expect(wrapper.props().value).toBe('All')
    expect(wrapper.props().options).toStrictEqual([])
  })
  test('exist is tab', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.isVisible()).toBe(true)
  })
})
