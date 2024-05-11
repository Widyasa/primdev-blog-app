import {ref} from "vue";
export const baseUrl = 'https://primdev.alwaysdata.net/api/'
export const token = ref(localStorage.getItem("token"))
const allUser = ref(localStorage.getItem("user"))