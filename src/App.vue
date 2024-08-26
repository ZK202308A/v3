<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember2 from './stores/useMember2'

const {computedMid} = useMember2()

console.log("-----------------------------")
console.log(computedMid)


</script>

<template>
  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>

    <span > <RouterLink to="/login">Login</RouterLink> </span>

    <span > <button @click="logout" >Logout</button> </span>

  </div>

  <div >
    <hr/>
      USERID : {{ computedMid  }}   
    <hr/>
  </div>

  <RouterView></RouterView>
  
</template>

<style scoped>

span {margin-left: 1em;}


</style>
