

const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue")
const TodoAddPage = () => import("../pages/todo/TodoAddPage.vue")
const TodoReadPage = () => import("../pages/todo/TodoReadPage.vue")

const todoRouting = { path: "/todo", 
  component: IndexPage,
  children: [
    {path: "list", component: TodoListPage},
    {path: "add", component: TodoAddPage},
    {path: "", redirect: '/todo/list'},
    {path: "read/:mno", component: TodoReadPage}
  ]
}

export default todoRouting