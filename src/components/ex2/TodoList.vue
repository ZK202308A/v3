<template>
  <div>
    <div><input type='checkbox' :value="'A'" v-model="selectAll">  SELECT ALL</div>
    <ul>
      <li v-for="todo in todoList" :key="todo.tno">
        <input type="checkbox" :value="todo.tno" v-model="selectList"> {{ todo.tno }} -- {{ todo.title }}
      </li>
    </ul>
    <button @click="handleClickRemove" >CLICK</button>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue';

const selectList = ref([])
const selectAll = ref([])

const todoList = inject('todoList')
const removeTodos = inject('removeTodos')

const handleClickRemove = () => {
  removeTodos(selectList.value)
}

watch(selectAll,(newValue) => {

  if(!newValue || newValue == ''){
  
    console.log("unchecked")
    selectList.value.length = 0
  
  }else if(newValue == 'A'){
  
    console.log('checked')

    todoList.value?.forEach(t => {
      selectList.value.push(t.tno)
    });
  }
})


</script>

<style lang="scss" scoped>

</style>