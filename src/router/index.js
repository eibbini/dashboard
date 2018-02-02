import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashbaord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})