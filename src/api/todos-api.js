import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const todoAPI = {
  getTodos() {
    return instanceAxios.get('todos').then(data => data.data)
  }
}