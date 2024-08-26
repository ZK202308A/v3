

<template>
  <div>
    {{ todo }}
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getOne } from '../../apis/todoAPI';


const route = useRoute()

const mno = route.params.mno

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