import { defineStore } from "pinia"
import { computed, ref } from "vue"

const useCount = defineStore('countStore', ()=> {

  const count = ref({num: 3})

  const inc = () => count.value.num++

  const dec = () => count.value.num--


  return {count, inc, dec }
})

export default useCount 