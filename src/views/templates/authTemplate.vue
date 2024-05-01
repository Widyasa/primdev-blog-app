<script setup>

</script>

<template>
  <div class="h-screen bg-[rgba(18,177,183,0.1)]">
    <div class="normal-section">
      <div class="lg:col-span-12 col-span-12 justify-center">
        <div class="flex items-center justify-center h-screen w-full">
          <div class="w-full h-auto flex flex-column justify-center align-items-center">
            <div class="bg-white border border-border-grey p-8 w-full rounded-xl flex flex-col items-center" style="max-width: 450px">
              <img src="/logo.png" alt="" class="w-[130px] h-[130px]">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>