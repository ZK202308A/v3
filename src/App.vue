<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useMember from './stores/useMember';
import { computed, watch } from 'vue';

const {member, getMid, logout} = useMember()


const mid = computed(() => member.value?.mid)


</script>

<template>
  {{ member }}
  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>
    <span v-if="mid === null"> <RouterLink to="/login">Login</RouterLink> </span>

    <span v-if="mid !== null"> <button @click="logout" >Logout</button> </span>

  </div>

  <div v-if="mid !== null">
     
    <hr/>
      MemberID : {{ mid }}   
    <hr/>
  </div>

  <RouterView></RouterView>
  
</template>

<style scoped>

span {margin-left: 1em;}


</style>
