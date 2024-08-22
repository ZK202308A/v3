
<template>
  <div>
    <CustomButton :label="'PLUS'" :amount="'1'"></CustomButton>
    <CustomButton :label="'MINUS'" :amount="'-1'"></CustomButton>
    <CustomButton :label="'P2'" :amount="'10'"></CustomButton>
    <CustomButton :label="'P3'" :amount="'-10'"></CustomButton>
  </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue';



</script>

<style lang="scss" scoped>

</style>