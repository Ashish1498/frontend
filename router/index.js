import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from '@/pages/admin.vue'
import employee from '@/pages/employee.vue'
import manageOrder from '@/pages/manageOrder.vue'

Vue.use(VueRouter)

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
