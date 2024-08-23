
import { createRouter, createWebHistory } from 'vue-router'
import todoRouting from './todo'


const MainPage = () => import("../pages/MainPage.vue")
const AboutPage = () => import("../pages/AboutPage.vue")
const LoginPage = () => import("../pages/LoginPage.vue")


const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage },
    {path: "/about", component: AboutPage },
    {path: "/login", component: LoginPage},
    todoRouting
  ]
})

export default routeConfig