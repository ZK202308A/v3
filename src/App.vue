<script setup>
import { RouterView, RouterLink } from 'vue-router';
import useCount from './stores/useCount';

const {count} = useCount()

</script>

<template>

  <div>
    <span> <RouterLink to="/">Main</RouterLink>  </span>
    <span> <RouterLink to="/about">About</RouterLink>  </span>
    <span> <RouterLink to="/todo">Todo</RouterLink>  </span>

    <span> AAAA{{ count.num }} </span>

  </div>

  <RouterView></RouterView>
  
</template>

<style scoped>

span {margin-left: 1em;}


</style>
