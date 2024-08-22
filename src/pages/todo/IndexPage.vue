<template>
  <div>
    <h2>Todo Sub Index Page</h2>
    <div>
      <span> <RouterLink to="/todo/add">TodoADD</RouterLink> </span>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>