import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import {token} from "@/helpers/GlobalVariable.js";
axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`
const app = createApp(App)

app.use(router)

app.mount('#app')
