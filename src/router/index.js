import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import DatosAlumno from '../components/DatosAlumno.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/datosalumno/:idalumno', component: DatosAlumno }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

/*export const router = createRouter({
  history: createWebHashHistory(), //-> Para distinguir que estamos corriendo una SPA. Es lo que coloca el # en la ruta
  routes,
})*/

export default router;