

<template>
  <div>
    <ul>
      <li v-for="todo in todoList" :key="todo.mno">
        {{ todo }}
      </li>
    </ul>

    <div>
      <span @click="() => handleClickPage(1)" > 1 </span>
      <span @click="() => handleClickPage(2)" > 2 </span>
      <span @click="() => handleClickPage(3)" > 3 </span>
      <span @click="() => handleClickPage(4)" > 4 </span>
      <span @click="() => handleClickPage(5)" > 5 </span>
    </div>

  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { getList } from '../../apis/todoAPI';
import { onMounted, ref, watch } from 'vue';

const route = useRoute()
const router = useRouter()



const handleClickPage = (pageNum) => {
  router.push({query: {page:pageNum} })
}

const todoList = ref([])

getList().then(data => {
  console.log(data.content)
  todoList.value = data.content
})


onMounted(() => {
  console.log("mounted " + route.query.page)
})

onBeforeRouteUpdate((to, from, next) => {
      console.log("---b update:"  )
      console.log(to.query.page)
})

</script>

<style lang="scss" scoped>

</style>