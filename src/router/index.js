//import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory} from 'vue-router'
import LoginPage from "@/views/web/LoginPage";
import HomePage from "@/views/app/HomePage";
import Guard from "../../services/middleware/Auth";
import MySales from "@/views/app/sales/MySales";
import SalesAll from "@/views/app/sales/SalesAll";
import VendorsAll from "@/views/app/sales/VendorsAll";
import CollaboratorPage from "@/views/app/management/CollaboratorPage";
import ReportFinancial from "@/components/app/reports/ReportFinancial";

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: Guard.auth
  },
  {
    path: '/vendas',
    name: 'SalesAll',
    component: SalesAll,
    beforeEnter: Guard.auth
  },
  {
    path: '/minhas-vendas',
    name: 'MySales',
    component: MySales,
    beforeEnter: Guard.auth
  },
  {
    path: '/equipes',
    name: 'VendorsAll',
    component: VendorsAll,
    beforeEnter: Guard.auth
  },
  {
    path: '/colaboradores',
    name: 'CollaboratorPage',
    component: CollaboratorPage,
    beforeEnter: [
      Guard.admin,
      Guard.auth
    ]
  },
  {
    path: '/extrato-financeiro',
    name: 'ReportFinancial',
    component: ReportFinancial,
    beforeEnter: [
      Guard.report,
      Guard.auth
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
