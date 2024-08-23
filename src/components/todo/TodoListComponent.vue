

<template>
  <div>


    <div v-if="loading" class="loadingDiv">
      <h1>Loading.............</h1>
    </div>

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
import { onMounted, ref } from 'vue';

const route = useRoute()
const router = useRouter()

const loading = ref(false)


const handleClickPage = (pageNum) => {
  router.push({query: {page:pageNum} })
}

const todoList = ref([])

const loadPageData = async (page) => {

  loading.value = true

  const data = await getList(page)

  todoList.value = data.content

  setTimeout(()=> {
      loading.value = false
  },1000)
  
}

onMounted(() => {
  const page =  route.query.page || 1
  loadPageData(page)
})

onBeforeRouteUpdate((to, from, next) => {
  const page = to.query.page
  loadPageData(page)
  next()
})

</script>

<style scoped>

.loadingDiv {
  position: absolute;
  top: 30vh;
  left: 40vw;
  width: 20vw;
  height: 10vh;
  background-color: aqua;

}

</style>