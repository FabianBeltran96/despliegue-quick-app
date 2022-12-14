import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AthletesView from '../views/AthletesView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/athletes',
    name: 'athletes',
    component: AthletesView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/medals',
    name: 'medals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MedalView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
