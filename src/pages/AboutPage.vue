<template>
  <div>
    <h1>About Page</h1>

    <div>
      {{ obj }}
    </div>
    <hr/>
    <h2>{{ obj.v1 }}</h2>
    <hr/>
    <h2>{{ str1 }}</h2>

  </div>
</template>

<script setup>
import { computed, ref, toRef } from 'vue';
import useCount from '../stores/useCount';

const {inc,dec, count} = useCount()

const obj = ref({v1:'AAA', v2:'BBB'})

let str1 = toRef(obj.value,"v1")

setTimeout(()=> {
  str1.value = "ZZZ"
}, 3000)



</script>

<style lang="scss" scoped>

</style>