import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Select = resolve =>require(["@/page/Select"],resolve);
const Title = resolve =>require(["@/page/Title"],resolve);
const Manage = resolve =>require(["@/page/pagerouter/Manage"],resolve);
const User = resolve =>require(["@/page/pagerouter/User"],resolve);
const Food = resolve =>require(["@/page/pagerouter/Food"],resolve);
const Order = resolve =>require(["@/page/pagerouter/Order"],resolve);
const Administrator = resolve =>require(["@/page/pagerouter/Administrator"],resolve);
const HomeThis = resolve =>require(["@/page/pagerouter/HomeThis"],resolve);
const Addshop = resolve =>require(["@/page/pagerouter/Addshop"],resolve);








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
      },
      {
        path: '/',
        name: 'HomeThis',
        component:HomeThis
      },
      {
        path: '/addshop',
        name: 'Addshop',
        component:Addshop
      }
      ]
     
    }
  ]
})
