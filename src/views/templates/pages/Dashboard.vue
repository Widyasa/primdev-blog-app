<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/helpers/GlobalVariable.js'
const user = ref({})
const getUser = async () => {
  try {
    const {data} = await axios.get(baseUrl + 'user')
    user.value = data
    localStorage.setItem('user', JSON.stringify(user.value))
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  getUser()
})
</script>

<template>
<div class="mt-10">
    <div class="grid-cols-12">
      <h1 class="text-5xl font-semibold">Halo, Selamat Datang <span class="capitalize">{{user.name}}</span></h1>
    </div>
</div>
</template>

<style scoped>

</style>