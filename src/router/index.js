// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CartPage from '@/domains/cart/pages/CartPage.vue'

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
