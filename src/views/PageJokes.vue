<template>
  <div class="flex flex-col w-full mt-10">
    <h1 class="self-center font-extrabold text-4xl leading-10">
      Chucknorris Jokes
    </h1>

    <div class="flex flex-col self-start mt-2 mx-4">
      <p class="text-gray-500 font-medium text-xl self-start my-6">
        Select a category :
      </p>

      <div class="flex flex-row flex-wrap gap-8 justify-center">
        <div v-if="isLoading">
          <Loader />
        </div>

        <CategoriesList
          v-else
          v-for="category in categories"
          :key="category"
          :category="category"
          :selectedCategory="selectedCategory"
          @onSetCategory="setCategory"
        />
      </div>
    </div>

    <div
      v-if="selectedCategory"
      class="flex mt-16 flex-row justify-center items-center gap-8"
    >
      <div class="text-3xl font-light">
        {{ selectedCategory }}
      </div>
      <button
        @click="getRandom"
        class="bg-gray-200 flex flex-row items-center p-2 rounded-[8px] hover:bg-slate-300"
      >
        <RandomIcon class="w-6 h-6 m-1 text-red-600" />
        <span>Pick a Random Joke</span>
      </button>
    </div>

    <div class="flex flex-wrap my-8 mx-4">
      <JokeCard :selectedCategory="selectedCategory" ref="textCardRef" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { ApiChucknorris } from '../shared/api/index'
import { RandomIcon } from '../assets/svg/index'
import CategoriesList from '../components/global/CategoriesList.vue'
import Loader from '../components/global/Loader.vue'
import JokeCard from '../components/global/JokeCard.vue'

const categories = ref([])
const isLoading = ref(false)
const selectedCategory = ref()
const textCardRef = ref(null)

const setCategory = (category) => {
  selectedCategory.value = category
}

onMounted(async () => {
  try {
    isLoading.value = true
    categories.value = await ApiChucknorris.getCategories()
  } catch (error) {
    console.log('Error')
    isLoading.value = false
  } finally {
    isLoading.value = false
  }
})

const getRandom = () => {
  textCardRef.value.getJoke(true)
}
</script>
