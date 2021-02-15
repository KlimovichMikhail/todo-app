import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Title.vue'

describe('Title.vue', () => {
  it('renders the title', () => {
    const wrapper = shallowMount(Title)

    expect(wrapper.find('h1')).toBeTruthy()
    expect(wrapper.isVisible()).toBe(true)
  })
})
