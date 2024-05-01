<script setup>

import Sidebar from "@/components/UI/Sidebar.vue";
import Topbar from "@/components/UI/Topbar.vue";
</script>

<template>
  <div class="h-screen bg-[#F5F6FB]">
    <div class="grid grid-cols-12 h-full">
      <div class="col-span-2">
        <Sidebar class="bg-white"/>
      </div>
      <div class="col-span-10">
        <div class="">
          <Topbar class="border-b py-6"/>
          <RouterView class="section"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>