import {moveToLogin } from "./moveToLogin"


const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue")
const TodoAddPage = () => import("../pages/todo/TodoAddPage.vue")
const TodoReadPage = () => import("../pages/todo/TodoReadPage.vue")





const todoRouting = { path: "/todo", 
  component: IndexPage,
  children: [
    {path: "list", component: TodoListPage, beforeEnter: moveToLogin},
    {path: "", redirect: '/todo/list?page=1'},
    {path: "read/:mno", component: TodoReadPage},
    { path: "add", component: TodoAddPage, beforeEnter: moveToLogin},
  ]
}

export default todoRouting