<script setup>

import {useRoute} from "vue-router";
import router from '@/router/index.js'

const route = useRoute()
const logout = async () => {
  localStorage.removeItem("token")
  location.reload()
}
</script>

<template>
<div class="bg-white">
  <div class="section">
    <div class="flex justify-between">
      <h2 class="text-4xl font-semibold capitalize">Halaman {{route.name}}</h2>
      <button @click="logout" class="px-3 py-2 bg-red-500 rounded text-white">Logout</button>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>