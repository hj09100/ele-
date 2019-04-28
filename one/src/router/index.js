import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Select from '@/page/Select'
import Title from '@/page/Title'
import Manage from '@/page/pagerouter/Manage'
import User from '@/page/pagerouter/User'
import Food from '@/page/pagerouter/Food'
import Order from '@/page/pagerouter/Order'
import Administrator from '@/page/pagerouter/Administrator'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component:Select
    },
    {
      path: '/title',
      name: 'Title',
      component:Title,
      children:[
         {
        path: '/manage',
        name: 'Manage',
        component:Manage
      },
      {
        path: '/user',
        name: 'User',
        component:User
      },
      {
        path: '/food',
        name: 'Food',
        component:Food
      },
      {
        path: '/order',
        name: 'Order',
        component:Order
      },
      {
        path: '/administrator',
        name: 'Administrator',
        component:Administrator
      }
      ]
     
    }
  ]
})
