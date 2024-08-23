import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useMember = defineStore('memberStore', () => {

  const member = ref( {mid: null} )

  const login = (value) => {
  
    console.log("login..." + value)
    member.value.mid = value
  }

  const logout = () => {

    console.log("logout") 
    member.value.mid = null
  }

  const memberId = computed(() => member.value.mid)

  return {login, logout, memberId, member}

})

export default useMember