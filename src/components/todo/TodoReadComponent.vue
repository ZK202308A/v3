

<template>
  <div>
    {{ todo }}
  </div>
  <button @click="handleMoveEdit" >EDIT</button>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getOne } from '../../apis/todoAPI';
import useMember2 from '../../stores/useMember2';


const route = useRoute()
const router = useRouter()

const mno = route.params.mno

const {computedMid} = useMember2()

const handleMoveEdit = () => {

  router.push(`/todo/edit/${mno}`)

}

const todo = ref({
  mno:0,
  title:'',
  writer:'',
  dueDate:''
})

onMounted(()=> {
  console.log("mno: " + mno)

  getOne(mno).then(data => todo.value = data)

})




</script>

<style lang="scss" scoped>

</style>