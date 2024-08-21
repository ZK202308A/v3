<template>
  <div>
    <ul>
      <li v-for="t in todos" :key="t.id"> {{ t }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const todos = ref([])

//비동기처리할껀데.. 이 안에서는 동기화된 방식으로 코드를 작성할 꺼야 
const getData = async() => {

  //axios.get은 Promise를 반환 
  //await를 붙여주면 동기환된 방식으로 코드를 작성할 수 있음 
  //await가 있으면 무조건 그 함수는 async가 있어야만 한다. 
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

  //결과 데이터를 반환하는 것처럼 보이지만.. 
  //함수의 결과는 항상 Promise이다. 
  return res.data

}


getData().then(arr => todos.value = arr)


</script>

<style lang="scss" scoped>

</style>