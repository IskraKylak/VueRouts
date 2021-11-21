import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'
import NotFound from '../pages/404.vue'
import Product from '../pages/Product.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
      path: '/shop',
      name: 'Shop',
      component: Shop
   },
   {
      path: '/shop/:id',
      name: 'prosuct',
      component: Product
   },
   {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router
