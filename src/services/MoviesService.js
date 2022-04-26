import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { api } from "./AxiosService.js"

const params = {
  api_key: '545c6ef058e65396849dfbbf381cbca3',
  include_adult: false,
  query: '',
  page: 1
}


class MoviesService {
  async search(query){
    params.query = query
    params.page = AppState.currentPage
    const res = await api.get('', { params })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.totalPages = res.data.total_pages
    AppState.currentPage = res.data.page
  }

  async changePage(newPage){
    params.page = newPage
    const res = await api.get('', { params })
    AppState.movies = res.data.results.map(m => new Movie(m))
    AppState.currentPage = res.data.page
  }
}

export const moviesService = new MoviesService()