

<template>
  <div>
    <h1>Todo Read Page</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';


const route = useRoute()

console.log(route.params.mno)

</script>

<style lang="scss" scoped>

</style>