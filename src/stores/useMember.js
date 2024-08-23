import { defineStore } from "pinia";
import { reactive, computed, toRefs, toRef } from "vue";

const useMember = defineStore('memberStore', () => {

  const member = reactive({ mid: localStorage.getItem('mid') || '' });

  const memberMid = toRef(member, 'mid');

  const login = (value) => {
  
    member.mid = value
  
    localStorage.setItem('mid', value)
  }

  const logout = () => {
  
    member.mid = ''
  
    localStorage.removeItem('mid')
  
  }

  const computedMid = computed(() => {

    if(!localStorage.getItem('mid')){
      return null
    }

    if(localStorage.getItem('mid') && ! member.mid){
      member.mid = localStorage.getItem('mid')
      return localStorage.getItem('mid')
    }

    return memberMid;
  });

  return { login, logout, member, computedMid }

})

export default useMember