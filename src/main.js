import { createApp } from 'vue'
import App from './App.vue'

import AboutPage from './pages/AboutPage.vue'
import MainPage from './pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/todo/IndexPage.vue'
import TodoListPage from './pages/todo/TodoListPage.vue'

const routeConfig = createRouter({
  history:createWebHistory(),
  routes: [
    {path: "/" , component: MainPage},
    {path: "/about", component: AboutPage},
    { path: "/todo", 
      component: IndexPage,
      children: [
        {path: "list", component: TodoListPage}
      ]
    }
  ]
})

createApp(App)
.use(routeConfig)
.mount('#app')
