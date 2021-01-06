import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import( '../views/Shop.vue')
  },
  {
    path: '/shop/:id',
    name: 'product',
    component: () => import( '../views/Product.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import( '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
