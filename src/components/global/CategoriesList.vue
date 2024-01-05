<template>
  <div
    :class="
      category == selectedCategory ? 'text-purple-700 -translate-y-1' : ''
    "
    class="w-fit mt-2 hover:text-purple-700 transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110"
  >
    <input
      type="radio"
      name="category"
      :id="category"
      @click="selectCategory(category)"
      class="sr-only"
    />
    <label :for="category">
      <div class="rounded-[6px] bg-slate-200 cursor-pointer">
        <component :is="LOCALE_ICON[category]" class="w-16 h-16 p-1" />
      </div>
      <p class="font-medium mt-2 cursor-pointer">{{ category }}</p>
    </label>
  </div>
</template>
<script setup>
import { LOCALE_ICON } from '../../shared/utils/index'
defineProps({
  category: String,
  selectedCategory: String,
})
const emit = defineEmits(['onSetCategory'])

const selectCategory = (category) => {
  emit('onSetCategory', category)
}
</script>
