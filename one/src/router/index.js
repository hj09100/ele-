import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Select from '@/page/Select'
import Title from '@/page/Title'
import Manage from '@/page/pagerouter/Manage'
import Shop from '@/page/pagerouter/Shop'





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
        path: '/shop',
        name: 'Shop',
        component:Shop
      }
      ]
     
    }
  ]
})
