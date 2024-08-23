<template>
  <div>
    <h1>About Page</h1>

    <div>

      {{ count.num }}
      <button @click="inc" >INC</button>
      <button @click="dec">DEC</button>
    </div>

  </div>
</template>

<script setup>
import useCount from '../stores/useCount';

const {inc,dec, count} = useCount()

</script>

<style lang="scss" scoped>

</style>