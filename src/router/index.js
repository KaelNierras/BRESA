import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/',
            component: Login
        },
        {
            name: 'sales-page',
            path: '/sales',
            component:() => import('../views/Sales.vue')
        },
        {
            name: 'cart-page',
            path: '/cart',
            component:() => import('../views/Cart.vue')
        },
        {
            name: 'stock-page',
            path: '/stock',
            component:() => import('../views/Stocks.vue')
        },
        {
            name: 'items-page',
            path: '/items',
            component:() => import('../views/Item.vue')
        }
    ]
})

export default router