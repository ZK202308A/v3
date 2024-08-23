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

    console.log("logout") 
    member.value.mid = null

    localStorage.removeItem('mid')
  }

  const getMid = computed( () => {

    console.log("1")

    if( ! localStorage.getItem('mid')) {
      return null
    }

    console.log("2")
    if( localStorage.getItem("mid")  && ! member.value.mid ) {
      member.value.mid = localStorage.getItem("mid")
    }
    console.log("3")
    if(member.value.mid){
      return member.value.mid
    }
    console.log("4")

    return localStorage.getItem("mid")

  })

  const memberId = computed(() => member.value.mid)

  return {login, logout, memberId, member,  getMid }

})

export default useMember