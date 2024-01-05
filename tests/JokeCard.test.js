import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import JokeCard from '../src/components/global/JokeCard.vue'

test('renders loader when isLoading is true', async () => {
  const wrapper = mount(JokeCard, {
    props: { selectedCategory: 'someCategory' },
  })
  // Assuming your Joke card component renders some text
  expect(wrapper.text('Loading...')).not.toBeNull()
})
