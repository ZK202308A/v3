<template>
  <div>
    <h1>Login Page</h1>

    <input type="text" v-model="midInput">

    <button @click="handleClick">Login</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import useMember from '../stores/useMember';

const midInput = ref('')

const {login} = useMember()

const handleClick = () => {

  const mid = midInput.value 
  login(mid)
}


</script>

<style lang="scss" scoped>

</style>