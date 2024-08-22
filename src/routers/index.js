
import MainPage from "../pages/MainPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import { createRouter, createWebHistory } from 'vue-router'


const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage},
    
    {path: "/about", component: AboutPage},
    
  ]
})

export default routeConfig