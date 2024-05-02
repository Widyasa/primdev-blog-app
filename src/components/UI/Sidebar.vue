<script setup>

import SidebarIcon from "@/components/UI/sidebar/SidebarIcon.vue";
</script>

<template>
<div class="px-10 border-r h-full flex flex-col items-center ">
  <img src="/logo.png" alt="" class="w-[130px] h-[130px]">
  <div class="mt-6 w-full flex-col flex gap-4">
    <SidebarIcon route-name="dashboard" />
    <SidebarIcon route-name="blog" />
  </div>
</div>
</template>

<style scoped>

</style>