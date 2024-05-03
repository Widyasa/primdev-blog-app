<script setup>
import axios from "axios";
import {baseUrl} from "@/helpers/GlobalVariable.js";
import {onMounted, ref} from "vue";
const blogList = ref()
const searchList = ref('')
const getData = async () => {
  try{
    const {data} = await axios.get(baseUrl + 'blog')
    blogList.value = data
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}
const searchData = async () => {
  try{
    const {data} = await axios.get(baseUrl + `blog/search/${searchList.value}`)
    blogList.value = data
    if (searchList.value === ''){
      await getData()
    }
  } catch (e) {
    console.log(e)
  }

}
const deleteData = async (id) => {
    try{
      const {data} = await axios.delete(baseUrl + `blog/${id}`)
      getData()
    } catch (e) {
      console.log(e)
    }
}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="flex w-full gap-6 items-center">
    <div class="w-full">
      <input type="text" @keyup="searchData" v-model="searchList" class="w-full bg-[#F5F6FB] border rounded p-3 focus:outline-0" placeholder="search here...">
    </div>
    <div class="">
      <RouterLink :to="{name: 'Create Blog'}" class="btn btn-primary whitespace-nowrap">Add New Blog</RouterLink>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-4 mt-10">
    <div class="card-blog" v-for="(item, index) in blogList" :key="index">
      <img :src="item.image" alt="" class="w-full h-auto aspect-video object-cover rounded">
      <h5 class="mt-5 text-xl font-semibold">
        {{item.title}}
      </h5>
      <p class="blog-content">
        {{item.content}}
      </p>
      <div class="mt-5 flex justify-center gap-5">
        <RouterLink :to="{path: '/blog/update/' + item.id}" class="btn btn-primary w-full text-center">Update</RouterLink>
        <button @click="deleteData(item.id)" class="btn btn-primary w-full">Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>