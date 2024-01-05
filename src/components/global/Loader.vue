<template>
  <div class="flex flex-row items-center gap-2">
    <LoadingIcon class="w-10 h-10 animate-spin" />
    <p class="text-xl text-gray-600">Please wait, fetching data...</p>
  </div>
</template>
<script setup>
import { LoadingIcon } from '../../assets/svg/index.jsx'
</script>
