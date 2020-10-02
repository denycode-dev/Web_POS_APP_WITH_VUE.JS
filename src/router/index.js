import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '.././store/index'

/* =========================    Router Import   ========================= */
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import History from '../views/History.vue'
import Edit from '../views/Edit.vue'
import CardProduct from '../views/CardProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/Card',
        name: 'CardProduct',
        component: CardProduct
      }
    ]
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/main',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
