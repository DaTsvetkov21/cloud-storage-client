import Vue from 'vue'
import VueRouter from 'vue-router'
import AppSingUp from '../views/AppSingUp.vue'
import AppSingIn from '../views/AppSingIn.vue'
import AppStorage from '../views/AppStorage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/singin',
    name: 'singin',
    view: AppSingIn,
    component: () => import('../views/AppSingIn.vue')
  },
  {
    path: '/singup',
    name: 'singup',
    view: AppSingUp,
    component: () => import('../views/AppSingUp.vue')
  },
  {
    path: '/',
    name: 'main',
    view: AppStorage,
    component: () => import('../views/AppStorage.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
