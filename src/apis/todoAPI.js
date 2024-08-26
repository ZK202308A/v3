import axios from "axios"



//const host = 'http://49.174.76.109:8088/api/v1/todos'
const host = 'http://192.168.219.104:8088/api/v1/todos'


export const getList = async (page) => {

  const res = await axios.get(`${host}/list`, {params: {page:page}})

  return res.data

}