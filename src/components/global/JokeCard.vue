<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div v-else-if="jokesList?.total == 0">
    <EmptyCard />
  </div>
  <div
    v-else-if="jokesList?.value"
    class="flex flex-col justify-start relative bg-gray-200 m-2 w-[50%] max-[425px]:w-full cursor-pointer rounded-[8px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104"
  >
    <SingleCard
      :joke-text="jokesList.value"
      :created-at="convertedDateTime(jokesList?.created_at)"
    />
  </div>
  <div
    v-else
    class="flex flex-col justify-start relative bg-gray-200 m-2 p-2 w-[30%] max-[1024px]:w-[45%] max-[425px]:w-full cursor-pointer rounded-[8px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104"
    v-for="joke in jokesList?.result"
    :key="joke.id"
  >
    <p class="mb-2 text-start font-bold italic">{{ joke.value }}</p>
    <br />
    <span
      class="self-end align-bottom absolute my-2 bottom-0 font-extralight"
      >{{ convertedDateTime(joke.created_at) }}</span
    >
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { ApiChucknorris } from '../../shared/api/index'
import { convertedDateTime } from '../../shared/utils/index'
import Loader from './Loader.vue'
import EmptyCard from './EmptyCard.vue'
import SingleCard from './SingleCard.vue'
import { useToastService } from '../../shared/utils/index'

const { showToast } = useToastService()
const jokesList = ref()
const isLoading = ref(false)

const props = defineProps({
  selectedCategory: String,
})

watch(
  () => [props.selectedCategory],
  () => {
    getJoke()
  },
)

const getJoke = async (isRandom = false) => {
  try {
    isLoading.value = true
    jokesList.value = isRandom
      ? await ApiChucknorris.getRandomJoke(props.selectedCategory)
      : await ApiChucknorris.getJoke(props.selectedCategory)
    showToast('Fetched Jokes!', {
      type: 'success',
      maxToasts: 4,
      timeout: 2000,
    })
  } catch (error) {
    isLoading.value = false
    showToast(`Error: ${error}`, { type: 'error' })
  } finally {
    isLoading.value = false
  }
}

defineExpose({ getJoke })
</script>
