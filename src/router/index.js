import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
