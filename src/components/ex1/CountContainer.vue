
<template>
  <div>
    <CountDisplay></CountDisplay>
    <CountButtons></CountButtons>
  </div>
</template>

<script setup>
import { ref, provide, onMounted, onBeforeUnmount, onUnmounted } from 'vue';
import CountButtons from './CountButtons.vue';
import CountDisplay from './CountDisplay.vue';

const data = ref({num:0})

const changeNum = (amount) => {
  data.value.num += amount
  console.log(data.value)
  localStorage.setItem('count', JSON.stringify(data.value))
}

provide('data', data)
provide('changeNum', changeNum)

onMounted(() => {
  console.log('mounted..................')
  const str = localStorage.getItem('count')

  if(!str){
    return
  }
  const obj = JSON.parse(str)
  console.log(obj)
  data.value = obj
})

onBeforeUnmount(() => {
  localStorage.setItem('count', JSON.stringify(data.value))
})
onUnmounted(() => {
  localStorage.setItem('count', JSON.stringify(data.value))
})



</script>

<style lang="scss" scoped>

</style>