

const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue")


const todoRouting = { path: "/todo", 
  component: IndexPage,
  children: [
    {path: "list", component: TodoListPage},
    {path: "", redirect: '/todo/list'}
  ]
}

export default todoRouting