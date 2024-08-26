

<template>
  <div>
    <div v-if="loading" class="loadingDiv">
      <h1>Loading.............</h1>
    </div>

      <ul>
        <li v-for="t in result.content" :key="t.tno">
          {{ t }}
        </li>
      </ul>

      <template v-for="(p,idx) in makePageArr()" :key="idx">
        <span class="pageSpan" @click="() => handleClickPage(p.page)" > {{p.label}} </span>
      </template>

  </div>
</template>

<script setup>

import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { getList } from '../../apis/todoAPI';
import { onMounted, ref, watch } from 'vue';

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const refresh = ref({load:false, page:0})


const handleClickPage = (pageNum) => {

  console.log("handle click page " + pageNum )

  router.push({query: {page:pageNum} })

  refresh.value.load = !refresh.value.load
  refresh.value.page = pageNum
}

const result = ref({
  content:[],
  number:0,
  size:10,
  totalElements:0,
  totalPages:0
})

const loadPageData = async (page) => {

  loading.value = true

  const data = await getList(page)

  console.log(data)

  result.value = data

  makePageArr()

  loading.value = false
  
}

const makePageArr = () => {

  //현재 페이지 번호 
  const currentPage = result.value.number + 1

  //마지막 페이지 번호  -  올림( 페이지번호/10.0 ) * 10 

  let lastPage = Math.ceil( currentPage/10.0 ) * 10

  //시작 페이지 번호
  const start = lastPage - 9 

  //이전, 다음 
  const prev = start !== 1
  const next = result.value.totalPages > lastPage

  if(result.value.totalPages < lastPage){
    lastPage = result.value.totalPages
  }

  // console.log(start)
  // console.log(lastPage)
  // console.log(prev, next)

  //페이지 번호에 출력에 필요한 데이터를 배열로 
  const pageArr = []

  //이전
  if(prev){
    pageArr.push({page: start -1, label:'이전' })
  }

  for(let i = start; i <= lastPage ; i++){
    pageArr.push({page: i, label: i })
  }
  //다음
  if(next){
    pageArr.push({page: lastPage + 1, label:'다음' })
  }
  return pageArr
}


onMounted(() => {
  const page =  route.query.page || 1
  loadPageData(page)
})

watch(refresh.value, ()=>{
  console.log('watch...................')
  const page =  refresh.value.page || 1
  loadPageData(page)
})

// onBeforeRouteUpdate((to, from, next) => {

//   console.log("onBeforeRouteUpdate-----------------")
//   console.log(to)

//   const page = to.query.page
//   loadPageData(page)
//   next()
// })

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

.pageSpan {
  margin: 0.3em;
  padding: 0.1em;
  border: 1px solid black;
}

</style>