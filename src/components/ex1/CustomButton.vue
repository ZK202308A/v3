<template>
  <div>
    <button class="customBtn" @click="() => fn( parseInt(props.amount) ) ">
        {{ props.label }}
    </button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps(['label','amount'])

const fn = inject('changeNum')

</script>

<style scoped>
.customBtn {
  margin: 0.2em;
  padding: 0.2em;
  background-color: aqua;
  
}

</style>