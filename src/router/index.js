import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Category = () => import('../views/category/Category');
const Profiles = () => import('../views/profiles/Profiles');

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home' //默认打开首页
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/profiles',
    component: Profiles,
  },
]

const router = new VueRouter({

  mode: 'history', //默认模式是hash url后缀会有#号
  routes,
  
})

export default router