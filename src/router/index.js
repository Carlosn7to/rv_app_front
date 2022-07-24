import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from "@/views/web/LoginPage";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
