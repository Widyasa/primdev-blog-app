<script setup>

import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";
import {reactive, ref} from "vue";
import axios from "axios";
import {baseUrl} from "@/helpers/GlobalVariable.js";
import router from "@/router/index.js";
const blogData = reactive({
  title: '',
  image: null, // Keep image as null initially
  content: ''
})
const imagePrev=ref('https://img.freepik.com/free-vector/landing-page-image-upload-concept_23-2148304432.jpg?t=st=1714706545~exp=1714710145~hmac=29ca06a88ac91f442eb5928ee467c9ce7a8ec12e605b23f3927d2a52864e9093&w=1380')
const file = ref()
const previewPhoto = (e) => {
   file.value = e.target.files[0];
  if (!file.value) return; // Handle no file selected case

  const reader = new FileReader();
  reader.onload = () => {
    imagePrev.value = reader.result;
  };
  reader.readAsDataURL(file.value.name);
}
blogData.image = file.value;

const createBlog = async () => {
  const fd = new FormData();
  // fd.append('_method', 'put')
  fd.append('image', file.value);
  fd.append('title', blogData.title);
  fd.append('content', blogData.content);
  try{
    const res = await axios.post(baseUrl + 'blog/store', fd,
        {
                  headers: {'Content-Type': 'multipart/form-data'}
               }
    )
    await router.push({name: 'blog'})
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <h1 class="text-center text-2xl font-semibold ">Create New Blog</h1>
  <form @submit.prevent="createBlog" class="mt-5 grid grid-cols-1 gap-5">
    <div class="img-upload-wrapper relative">
      <div class="absolute">
        <img :src="imagePrev" id="file-preview" class="aspect-video object-cover border" alt="">
      </div>
      <input type="file" class=" w-full h-full opacity-0 bg-primary  relative" id="file-input" @change="previewPhoto">
    </div>
    <BaseInput input-type="text" input-placeholder="enter blog title" input-title="Blog Title" input-name="blogTitle" v-model="blogData.title"/>
    <BaseTextArea input-type="text" input-placeholder="enter blog content" input-title="Blog Content" input-name="blogContent" v-model="blogData.content"/>
    <button class="btn btn-primary w-fit" type="submit">Submit</button>
  </form>
</template>

<style scoped>

</style>