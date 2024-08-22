

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

const loadPageData = async(page) => {
  const data = await getList(page)
  todoList.value = data.content
}

onMounted(() => {
  const page =  route.query.page || 1
  loadPageData(page)
})

onBeforeRouteUpdate((to, from, next) => {
  const page = to.query.page
  loadPageData(page)
})

</script>

<style lang="scss" scoped>

</style>