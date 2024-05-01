import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/templates/pages/Dashboard.vue";
import HomeTemplate from "@/views/templates/HomeTemplate.vue";
import Blog from "@/views/templates/pages/Blog.vue";
import AuthTemplate from "@/views/templates/authTemplate.vue";
import Login from "@/views/templates/pages/Login.vue";
import Register from "@/views/templates/pages/Register.vue";
import {token} from "@/helpers/GlobalVariable.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: HomeTemplate,
      meta: {isPrivate: true},
      children : [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: {isPrivate: true},
        },
        {
          path: '/blog',
          name: 'blog',
          component: Blog,
          meta: {isPrivate: true},
        },

      ]
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      component: AuthTemplate,
      meta: {isPrivate: false},
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: Login,
          meta: {isPrivate: false},
        },
        {
          path: '/auth/register',
          name: 'register',
          component: Register,
          meta: {isPrivate: false},
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  if (!token.value && to.meta.isPrivate) {
    return {name: 'login'}
  }
  // if (token.value && !to.meta.isPrivate) {
  //   return {name:"dashboard"}
  // }
})

export default router
