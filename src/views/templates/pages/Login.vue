<script setup>

import BaseInput from "@/components/BaseInput.vue";
</script>

<template>
  <div class="w-full">
    <form action="">
      <div class="flex flex-col gap-3 w-full">
        <base-input input-name="Email" input-title="Email" input-placeholder="enter your email..." input-type="email"/>
        <base-input input-name="Password" input-title="Password" input-placeholder="enter your password..." input-type="password"/>
      </div>
      <button class="btn btn-primary mt-6 w-full">Login</button>

      <p class="text-sm mt-4 text-center">Don't have Account? <router-link to="/auth/register" class="text-primary">Register Here</router-link></p>
    </form>
  </div>
</template>

<style scoped>

</style>