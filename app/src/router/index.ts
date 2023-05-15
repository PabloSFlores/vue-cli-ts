import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/index'
  },{
    path: '/index',
    name: 'EmployeesView',
    component: () => import('@/modules/employee/adapters/view/EmployeesView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
