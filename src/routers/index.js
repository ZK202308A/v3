
import { createRouter, createWebHistory } from 'vue-router'
import todoRouting from './todo'





const MainPage = () => import("../pages/MainPage.vue")
const AboutPage = () => import("../pages/AboutPage.vue")

const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage },
    {path: "/about", component: AboutPage },
    todoRouting
  ]
})

export default routeConfig