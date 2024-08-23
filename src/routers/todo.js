import useMember from "../stores/useMember"


const IndexPage = () => import("../pages/todo/IndexPage.vue")
const TodoListPage = () => import("../pages/todo/TodoListPage.vue")
const TodoAddPage = () => import("../pages/todo/TodoAddPage.vue")
const TodoReadPage = () => import("../pages/todo/TodoReadPage.vue")

const checkLogin = () => {
  const {member} = useMember()
  return member.mid ? true : false   
}

const moveToLogin = (to, from, next) => {
  
  console.log('move to todo add page: ' + checkLogin())

  if(checkLogin()){
    next()
  }else {
    next('/login')
  }
}

const todoRouting = { path: "/todo", 
  component: IndexPage,
  children: [
    {path: "list", component: TodoListPage},
    {path: "", redirect: '/todo/list'},
    {path: "read/:mno", component: TodoReadPage},
    { path: "add", 
      component: TodoAddPage,
      beforeEnter: moveToLogin
    },
  ]
}

export default todoRouting