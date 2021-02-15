import Tab from '@/components/Tab'
import { shallowMount } from '@vue/test-utils'

describe('unit tests in Tab.vue', () => {
  const wrapper = shallowMount(Tab, {
    propsData: {
      value: 'All'
    }
  })

  test('props in input', () => {
    expect(wrapper.props().value).toBe('All')
  })
  test('exist is tab', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
