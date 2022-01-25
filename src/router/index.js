import Vue from 'vue'
import VueRouter from 'vue-router'
import  mainpage from '../views/mainpage.vue'

Vue.use(VueRouter);

const routes = [
 {
  path: '/',
  name: 'home',
  component: mainpage
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
  {
    path: '/artcreate',
    name: 'artcreate',
    component:() => import("@/views/artcreate.vue"),
    props:true, //메인에 데이터 뿌린 후 props로 상세정보로 넘길 것
    
  }, 
  {
    path: '/test',
    name: 'test',
    component:() => import("@/views/test.vue"),
    props:true, //메인에 데이터 뿌린 후 props로 상세정보로 넘길 것
    
  }, 
  {
    path:'/cal',
    name: 'cal',
    component:() => import("@/views/cal.vue")
  },
  {
  path:'/article',
    name: 'article',
    component:() => import("@/views/article.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
