

<template>


  <div v-if="error !== null">ERROR {{ error }}</div>

  <div v-if="error === null">
    <div>
      <input type="text" v-model="todo.mno" readonly>
    </div>
    <div>
      <input type="text" v-model="todo.title" >
    </div>
    <div>
      <input type="text" v-model="todo.writer" readonly >
    </div>
    <div>
      <input type="date" v-model="todo.dueDate" >
    </div>
    <div>
      <button @click="handleClickModify">MODIFY</button>
      <button @click="handleClickDelete">DELETE</button>
    </div>
  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deleteOne, getOne, putOne } from '../../apis/todoAPI';
import useMember2 from '../../stores/useMember2';


const route = useRoute()
const router = useRouter()

const mno = route.params.mno

const {computedMid} = useMember2()

const handleClickDelete = () => {

  deleteOne(mno)

  router.replace("/todo/list")

}

const handleClickModify = () => {

  putOne(todo.value).then(result => {
    router.replace(`/todo/read/${mno}`)
  })

}

const todo = ref({
  mno:0,
  title:'',
  writer:'',
  dueDate:''
})
const error = ref(null)


onMounted(()=> {
  console.log("mno: " + mno)

  getOne(mno).then(data => todo.value = data).catch((err) => {

    console.log("---------------------------")
    console.log(err)

    error.value = err.response.data.message

  })

})




</script>

<style lang="scss" scoped>

</style>