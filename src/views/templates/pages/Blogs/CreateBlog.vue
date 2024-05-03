<script setup>

import BaseInput from "@/components/BaseInput.vue";
import BaseTextArea from "@/components/BaseTextArea.vue";
import {reactive} from "vue";
const blogData = reactive({
  blogName: '',
  blogImage: '',
  blogContent: ''
})

const previewPhoto = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    blogData.blogImage = reader.result;

    e.target.value = "";
  };
  reader.readAsDataURL(file);
}
const createBlog = () => {}
</script>

<template>
  <h1 class="text-center text-2xl font-semibold ">Create New Blog</h1>
  <form  class="mt-5 grid grid-cols-1 gap-5">
    <div class="img-upload-wrapper relative">
      <div class="absolute">
        <img :src="blogData.blogImage" id="file-preview" class="aspect-video object-cover" alt="">
      </div>
      <input type="file" class=" w-full py-[100px] opacity-0 relative" id="file-input" @change="previewPhoto">
    </div>
    <BaseInput input-type="text" input-placeholder="enter blog title" input-title="Blog Title" input-name="blogTitle" />
    <BaseTextArea input-type="text" input-placeholder="enter blog content" input-title="Blog Content" input-name="blogContent" />
  </form>
</template>

<style scoped>

</style>