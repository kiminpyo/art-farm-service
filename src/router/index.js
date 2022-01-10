import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  name: 'Home',
  component: home
 },
  {
    path: '/board',
    name: 'board',
    component:() => import("@/views/board.vue"),
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue')
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
  },
  {
    path: '/artdetail',
    name: 'artdetail',
    component:() => import("@/views/artdetail.vue"),
    props:true, //메인에 데이터 뿌린 후 props로 상세정보로 넘길 것
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
