import { defineStore } from "pinia";
import { ref } from "vue";


const useMember2 = defineStore('', () => {

  const userId = ref('')

  const signin = (str) => {

    userId.value = str
  }

  const signout = () => {
    userId.value = ''
  }

  return {userId, signin, signout}

})

export default useMember2