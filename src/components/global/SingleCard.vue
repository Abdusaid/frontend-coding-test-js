<template>
  <div
    class="flex flex-col justify-start relative bg-gray-200 m-2 p-2 cursor-pointer rounded-[8px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-104"
  >
    <p class="mb-2 text-start font-bold italic">{{ jokeText }}</p>
    <br />
    <span
      class="self-end align-bottom absolute my-2 bottom-0 font-extralight"
      >{{ createdAt }}</span
    >
  </div>
</template>
<script setup>
defineProps({
  jokeText: String,
  createdAt: String,
})
</script>
