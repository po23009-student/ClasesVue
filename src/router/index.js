import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import DatosAlumno from '../components/DatosAlumno.vue'
import AboutView from '../components/AboutView.vue';
import App from '../App.vue';

const routes = [
  { path: '/', component: App },
  { path: '/about', component: AboutView },
  { path: '/datosalumno/:idalumno', component: DatosAlumno }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/*export const router = createRouter({
  history: createWebHashHistory(), //-> Para distinguir que estamos corriendo una SPA. Es lo que coloca el # en la ruta
  routes,
})*/

export default router;