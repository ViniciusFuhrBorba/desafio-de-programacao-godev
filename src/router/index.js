import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import CadastroParticipante from '../views/CadastroParticipante.vue'
import CadastroSalasEventos from '../views/CadastroSalasEventos.vue'
import CadastroCafe from '../views/CadastroCafe.vue'
import PesquisaGeral from '../views/PesquisaGeral.vue'
import Etapas from '../views/Etapas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastroParticipante',
    name: 'CadastroParticipante',
    component: CadastroParticipante
  },
  {
    path: '/cadastroSalasEvento',
    name: 'CadastroSalasEvento',
    component: CadastroSalasEventos
  },
  {
    path: '/cadastroCafe',
    name: 'CadastroCafe',
    component: CadastroCafe
  },
  {
    path: '/pesquisaGeral',
    name: 'PesquisaGeral',
    component: PesquisaGeral
  },
  {
    path: '/etapas',
    name: 'Etapas',
    component: Etapas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router