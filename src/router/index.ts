import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/Pages/HomePage.vue'),
  },
  {
    path: '/playground/lightcycles',
    component: () => import('../playground/games/lightcycles/LightCycles.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
