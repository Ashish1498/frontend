import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from '@/pages/admin.vue'
import employee from '@/pages/employee.vue'
import manageOrder from '@/pages/manageOrder.vue'
import manageInventory from '@/pages/manageInventory.vue'
import manageEmployee from '@/pages/manageEmployee.vue'
import viewInventory from '@/pages/viewInventory.vue'
import register from '@/pages/register.vue'
import homePage from '@/pages/homePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/',
    mane: '/homePage',
    component: homePage
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/employee',
    name: 'employee',
    component: employee
  },
  {
    path: '/manageOrder',
    name: 'manageOrder',
    component: manageOrder
  },
  {
    path: '/manageInventory',
    name: 'manageInventory',
    component: manageInventory
  },
  {
    path: '/manageEmployee',
    name: 'manageEmployee',
    component: manageEmployee
  },
  {
    path: '/viewInventory',
    name: 'viewInventory',
    component: viewInventory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
