
<template>
  <div>

    <TodoList></TodoList>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList.vue';

const todoList = ref([])

const addTodo = ( title, content) => {
  const todo = {
    tno: uuidv4(),
    title: title,
    content: content
  }
  todoList.value = [...todoList.value, todo]
}

const removeTodos = (tnoArr) => {

  todoList.value = 
    todoList.value.filter(todo => tnoArr.includes(todo.tno) === false)

}

addTodo('AAA','AAA')
addTodo('BBB','BBB')
addTodo('CCC','CCC')
addTodo('AAA','AAA')
addTodo('BBB','BBB')
addTodo('CCC','CCC')
addTodo('AAA','AAA')
addTodo('BBB','BBB')
addTodo('CCC','CCC')

provide('todoList', todoList)
provide('addTodo', addTodo)
provide('removeTodos', removeTodos)




</script>

<style lang="scss" scoped>

</style>