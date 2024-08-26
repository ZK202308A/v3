<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember2 from './stores/useMember2'

const {computedMid, signout} = useMember2()

console.log("-----------------------------")
console.log(computedMid)


</script>

<template>
  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>

    <span v-if="computedMid ==='' " > <RouterLink to="/login">Login</RouterLink> </span>

    <span v-if="computedMid !=='' "> <button @click="signout" >Logout</button> </span>

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
