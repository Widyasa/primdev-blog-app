<script setup>

import {useRoute} from "vue-router";

const route = useRoute()
</script>

<template>
<div class="bg-white">
  <div class="section">
    <div class="flex justify-between">
      <h2 class="text-4xl font-semibold capitalize">Halaman {{route.name}}</h2>
      <button class="px-3 py-2 bg-red-500 rounded text-white">Logout</button>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>