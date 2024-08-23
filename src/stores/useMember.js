import { defineStore } from "pinia";
import { ref, computed } from "vue";

const useMember = defineStore('memberStore', () => {

  const member = ref( {mid: null} )

  const login = (value) => {
    
  
    console.log("login..." + value)

    member.value.mid = value

    localStorage.setItem('mid', value)

  }

  const logout = () => {

    member.value.mid = null

    localStorage.removeItem('mid')
  }

  return {login, logout, member }

})

export default useMember