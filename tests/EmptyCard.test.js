import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EmptyCard from '../src/components/global/EmptyCard.vue'

test('Renders an empty text', async () => {
  const emptyText = 'There are no any jokes in this category!'

  // Mount the component.
  const wrapper = mount(EmptyCard)

  // Assert that the rendered text includes the empty message.
  expect(wrapper.text()).contain(emptyText)
})
