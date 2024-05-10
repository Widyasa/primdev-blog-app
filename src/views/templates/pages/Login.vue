<script setup>
import BaseInput from "@/components/BaseInput.vue";
import { reactive } from 'vue'
import axios from 'axios'
import { baseUrl } from '@/helpers/GlobalVariable.js'
import router from '@/router/index.js'
const loginData = reactive({
  email : '',
  password : '',
})
const login = async () => {
  // const dataToken = '2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW'
  // localStorage.setItem("token", dataToken)
  // await router.push('/')
  try {
    const { data } = await axios.post(baseUrl + "login", loginData, {
      headers: { Authorization: `Bearer 2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW` }
    })
    localStorage.setItem("token", data.token)
    await router.push('/dashboardz')
    console.log(data)

  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="w-full">
    <form @submit.prevent="login">
      <div class="flex flex-col gap-3 w-full">
        <base-input v-model="loginData.email" input-name="Email" input-title="Email" input-placeholder="enter your email..." input-type="email"/>
        <base-input v-model="loginData.password" input-name="Password" input-title="Password" input-placeholder="enter your password..." input-type="password"/>
      </div>
      <button type="submit" class="btn btn-primary mt-6 w-full">Login</button>

      <p class="text-sm mt-4 text-center">Don't have Account? <router-link to="/auth/register" class="text-primary">Register Here</router-link></p>
    </form>
  </div>
</template>

<style scoped>

</style>