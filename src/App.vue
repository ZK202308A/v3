<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember from './stores/useMember';

const {computedMid, member} = useMember()



</script>

<template>
  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>

    <span v-if="computedMid === null"> <RouterLink to="/login">Login</RouterLink> </span>

    <span v-if="computedMid  !== null"> <button @click="logout" >Logout</button> </span>

  </div>

  <div >
     
    <hr/>
      MemberID : {{ member  }}   -- {{ computedMid }}
    <hr/>
  </div>

  <RouterView></RouterView>
  
</template>

<style scoped>

span {margin-left: 1em;}


</style>
