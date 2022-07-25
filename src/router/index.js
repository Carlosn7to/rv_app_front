//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory} from 'vue-router'
import LoginPage from "@/views/web/LoginPage";
import HomePage from "@/views/app/HomePage";
import Guard from "../../services/middleware/Auth";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: Guard.auth
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import( '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
