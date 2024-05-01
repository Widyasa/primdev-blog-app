<script setup>

</script>

<template>
<div class="px-10 border-r h-full flex flex-col items-center ">
  <img src="/logo.png" alt="" class="w-[130px] h-[130px]">
  <div class="mt-6 w-full flex-col flex gap-4">
    <RouterLink :to="{name: 'dashboard'}" active-class="active">
      <div class="dashboard-nav-wrapper w-full">
        <p class="text-dashboard">
          Dashboard
        </p>
      </div>
    </RouterLink>
    <RouterLink :to="{name: 'blog'}" active-class="active">
      <div class="dashboard-nav-wrapper w-full">
        <p class="text-dashboard">
          Blog
        </p>
      </div>
    </RouterLink>
  </div>
</div>
</template>

<style scoped>

</style>