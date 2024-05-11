<script setup>
import axios from "axios";
import {baseUrl} from "@/helpers/GlobalVariable.js";
import {onMounted, ref} from "vue";
const blogList = ref()
const searchList = ref('')
const blogListNull = ref(false)
const getData = async () => {
  try{
    const {data} = await axios.get(baseUrl + 'blog', {
      headers: { Authorization: `Bearer 2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW` }
    })
    blogList.value = data
  } catch (e) {
    console.log(e)
  }
}
const searchData = async () => {
  try{
    const {data} = await axios.get(baseUrl + `blog/search/${searchList.value}`, {
      headers: { Authorization: `Bearer 2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW` }
    })
    blogList.value = data
    if (searchList.value === ''){
      blogListNull.value = false
      await getData()
    }
    blogListNull.value = data.length <= 0 && searchList.value !== '';
  } catch (e) {
    console.log(e)
  }

}
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="container mx-auto mt-20">
    <div class="flex w-full gap-6 items-center">
      <div class="w-full">
        <input type="text" @keyup="searchData" v-model="searchList" class="w-full bg-[#F5F6FB] border rounded p-3 focus:outline-0" placeholder="search here...">
      </div>
    </div>
    <span class="loader absolute left-1/2 top-1/2" v-if="blogList === undefined"></span>
    <div class="grid grid-cols-4 gap-4 mt-10" v-if="blogList !== undefined || true">
      <div class="card-blog" v-for="(item, index) in blogList" :key="index">
        <img :src="item.image" alt="" class="w-full h-auto aspect-video object-cover rounded">
        <h5 class="mt-5 text-xl font-semibold">
          {{item.title}}
        </h5>
        <p class="blog-content">
          {{item.content}}
        </p>
      </div>
    </div>
    <p v-if="blogListNull" class="text-center">data empty</p>
  </div>
</template>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>