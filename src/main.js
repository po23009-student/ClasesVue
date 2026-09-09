import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'

const pinia = createPinia()
const app = createApp()

//createApp(App).mount('#app')
//App.use(pinia)
app.use(pinia)
app.use(router)
app.mount('#app')