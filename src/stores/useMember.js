import { defineStore } from "pinia";
import { ref, computed,  toRef } from "vue";

const useMember = defineStore('memberStore', () => {

  const member = ref({ mid: localStorage.getItem('mid') || '' });

  const memberMid = toRef(member, 'mid');

  const login = (value) => {
  
    member.value.mid = value
  
    localStorage.setItem('mid', value)
  }

  const logout = () => {
  
    member.value.mid = ''
  
    localStorage.removeItem('mid')
  
  }

  const computedMid = computed(() => {

    if(!localStorage.getItem('mid')){
      return null
    }

    if(localStorage.getItem('mid') && ! member.value.mid){
      member.mid = localStorage.getItem('mid')
      return localStorage.getItem('mid')
    }

    return memberMid;
  });

  return { login, logout, member, computedMid }

})

export default useMember