import Vue from 'vue'
import VueRouter from 'vue-router'

import AppStorage from '../views/AppStorage.vue'
import AuthPage from '../views/AuthPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    view: AppStorage,
    component: () => import('../views/AppStorage.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    view: AuthPage,
    component: () => import('../views/AuthPage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
