import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import formSeller from '../components/FormSeller.vue'
import formProduct from '../components/FormProduct.vue'
import stats from '../components/Stats.vue'
import share from '../components/Share.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/registrar-vendedor',
    name: 'formSeller',
    component: formSeller
  },
  {
    path: '/registrar-producto',
    name: 'formProduct',
    component: formProduct
  },
  {
    path: '/estadisticas',
    name: 'stats',
    component: stats
  },
  {
    path: '/share',
    name: 'share',
    component: share
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
