

<template>
  <div>
    {{ todo }}
  </div>
  <div>
    <button @click="handleClickDelete">DELETE</button>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deleteOne, getOne } from '../../apis/todoAPI';
import useMember2 from '../../stores/useMember2';


const route = useRoute()
const router = useRouter()

const mno = route.params.mno

const {computedMid} = useMember2()

const handleClickDelete = () => {

  deleteOne(mno)

  router.replace("/todo/list")

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