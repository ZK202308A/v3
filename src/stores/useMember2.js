import { defineStore } from "pinia";
import { computed, ref } from "vue";


const useMember2 = defineStore('useMember2', () => {

  const userId = ref('')

  const signin = (str) => {

    userId.value = str
    console.log(userId)
    
  }

  const signout = () => {
    userId.value = ''
  }

  const computedMid = computed(() => userId)

  return {userId, signin, signout, computedMid}

})

export default useMember2