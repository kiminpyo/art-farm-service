import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
 {
  path: '/home',
  name: 'Home',
  component: home
 },
  {
    path: '/board',
    name: 'board',
    component:() => import("@/views/board.vue"),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component:() => import("@/views/detail.vue"),
    props:true,
    
  },
  {
    path:'/create',
    name: 'create',
    component:() => import("@/views/create.vue")
  },
  {
    path:'/update',
    name: 'update',
    component:() => import("@/views/update.vue"),
    props:true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
