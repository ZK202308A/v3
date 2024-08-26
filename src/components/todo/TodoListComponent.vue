

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

      <template v-for="(p,idx) in pageArr" :key="idx">
        <span class="pageSpan" @click="() => handleClickPage(p.page)" > {{p.label}} </span>
      </template>

  </div>
</template>

<script setup>

import useListData from '../../hooks/useListData';

const {loading, router, refresh, result, pageArr} = useListData()

const handleClickPage = (pageNum) => {
  console.log("handle click page " + pageNum )
  router.push({query: {page:pageNum} }).then(() => {
    refresh.value = !refresh.value
  })
}


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