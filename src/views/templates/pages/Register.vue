<script setup>
import BaseInput from "@/components/BaseInput.vue";
import {reactive} from "vue";
import axios from "axios";
import {baseUrl, token} from "@/helpers/GlobalVariable.js";
import router from "@/router/index.js";
const registerData = reactive({
  name : '',
  email : '',
  password : '',
  confirm_password : ''
})
const register = async () => {
    const dataToken = '2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW'
    localStorage.setItem("token", dataToken)
    await router.push('/')
  // try{
  //   if (registerData.password === registerData.confirm_password) {
  //     const {data} = await axios.post(baseUrl + "register", registerData , {
  //       headers : {Authorization : `Bearer 2|HhnUrmaHAwSNUDf7Pz5IasQo4foBnU2KKr1gQLUW`}
  //     })
  //     token.value = dataToken
  //     await router.push('/')
  //   console.log(data)
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

}
</script>

<template>
  <div class="w-full">
    <form @submit.prevent="register">
      <div class="flex flex-col gap-3 w-full">
        <base-input v-model="registerData.name" input-name="Name" input-title="Name" input-placeholder="enter your name..." input-type="text"/>
        <base-input v-model="registerData.email" input-name="Email" input-title="Email" input-placeholder="enter your email..." input-type="email"/>
        <base-input v-model="registerData.password" input-name="Password" input-title="Password" input-placeholder="enter your password..." input-type="password"/>
        <base-input v-model="registerData.confirm_password" input-name="Confirm Password" input-title="Confirm Password" input-placeholder="confirm your password..." input-type="password"/>
      </div>
      <button type="submit" class="btn btn-primary mt-6 w-full">Register</button>
    </form>
    <p class="text-sm mt-4 text-center">Have an Account? <router-link to="/auth/login" class="text-primary">Login Here</router-link></p>
  </div>
</template>

<style scoped>

</style>