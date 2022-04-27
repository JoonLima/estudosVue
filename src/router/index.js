import { createRouter, createWebHistory } from 'vue-router';
import TelaLogin from '../views/TelaLogin.vue';
import TelaDashboard from '../views/TelaDashboard.vue';
import ControleDeProdutos from '../views/ControleDeProdutos.vue';
import ControleDeClientes from '../views/ControleDeClientes.vue';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: TelaDashboard,
    title: 'Dashboard',
    meta: { requitedAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: TelaLogin,
    title: 'Login',
    meta: { requiredAuth: false }
  },
  {
    path: '/controle-de-produtos',
    name: 'controle-de-produtos',
    component: ControleDeProdutos,
    title: 'Produtos',
    meta: { requitedAuth: true }
  },
  {
    path: '/controle-de-clientes',
    name: 'controle-de-clientes',
    component: ControleDeClientes,
    title: 'Clientes',
    meta: { requitedAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
