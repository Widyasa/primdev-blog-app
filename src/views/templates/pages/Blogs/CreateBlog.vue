<script setup>

import BaseInput from "@/components/BaseInput.vue";
</script>

<template>
  <h1 class="text-center text-2xl font-semibold ">Create New Blog</h1>
  <div class="mt-5 grid grid-cols-1">
    <BaseInput input-type="text" input-placeholder="enter blog title" input-title="Blog Title" input-name="blogTitle" />
  </div>
</template>

<style scoped>

</style>