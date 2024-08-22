import axios from "axios"

//const host = 'http://49.174.76.109:8080/api/v1/todos'
const host = 'http://localhost:8088/api/v1/todos'


export const getList = async () => {

  const res = await axios.get(`${host}/list`)

  return res.data

}