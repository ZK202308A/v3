import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import AboutPage from './pages/AboutPage.vue'
import MainPage from './pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage},
    {path: "/about", component: AboutPage}
  ]
})

createApp(App)
.use(routeConfig)
.mount('#app')
