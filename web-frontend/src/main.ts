import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

const routes = [
    { path: '/', component: import("./views/Index.vue") },
    { path: '/about', component: import("./views/About.vue") },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')
