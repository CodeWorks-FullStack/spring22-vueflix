import Axios from 'axios'
export const api = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie',
  timeout: 8000
})
