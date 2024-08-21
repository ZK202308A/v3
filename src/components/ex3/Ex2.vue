
<template>
  <div>

    <div>
      <button @click="() => handleClick('s0.json') ">S0</button>
      <button @click="() => handleClick('s1.json') ">S1</button>
      <button @click="() => handleClick('s2.json') ">S2</button>
    </div>

    <ul>
      <li v-for="s in arr" :key="s.sno" >
        {{ s }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const getStores = async (fileName) => {

  const res = await axios.get(`http://localhost:5173/${fileName}`)

  return res.data
}

const arr = ref([])

const handleClick = (file) => {

  getStores(file).then( result => {
    console.log(result)
    arr.value = result
  })

}


</script>

<style lang="scss" scoped>

</style>