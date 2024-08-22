

<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getList } from '../../apis/todoAPI';
import { ref } from 'vue';

const route = useRoute()
const router = useRouter()


const todoList = ref([])

getList().then(data => {
  console.log(data.content)
  todoList.value = data.content
})



</script>

<style lang="scss" scoped>

</style>