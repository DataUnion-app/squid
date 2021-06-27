import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/utils/auth';
import Observer from '@/utils/observer';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/Welcome')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Gallery')
  },
  {
    path: '/map',
    name: 'Map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Map')
  },
  {
    path: '/albums/:id',
    name: 'Albums',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Albums')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!Auth.token() && to.name != 'Welcome') {
    next({name: 'Welcome'});
    return;
  }
  next();
})

Observer.$on('login', ({account}) => {
  router.push({name: 'Home'})
})

export default router