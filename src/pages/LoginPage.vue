<template>
  <div>
    <h1>Login Page</h1>

    <input type="text" v-model="midInput">

    <button @click="handleClick">Login</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import useMember2 from '../stores/useMember2';

const midInput = ref('')
const {signin} = useMember2()

const handleClick = () => {
  const mid = midInput.value 
  signin(mid)
}

</script>

<style scoped>

</style>