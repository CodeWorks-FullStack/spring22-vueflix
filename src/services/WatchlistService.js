import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'

class WatchlistService {
  constructor() {
    AppState.watchList = JSON.parse(localStorage.getItem('watchlist')) || []
  }

  saveWatchlist() {
    localStorage.setItem('watchlist', JSON.stringify(AppState.watchList))
  }

  async addMovie(movie) {
    const found = AppState.watchList.find(m => m.id === movie.id)
    if (found) {
      Pop.toast('that movie is already on your list')
      return
    }
    AppState.watchList.push(movie)
    this.saveWatchlist()
    Pop.toast(`Added ${movie.title} to your watchlist`, 'success')
  }

  async remove(movie) {
    const yes = await Pop.confirm('are you sure you want to remove this that movie')
    if (!yes) { return }
    const i = AppState.watchList.findIndex(m => m.id === movie.id)
    if (i === -1) {
      Pop.toast('that movie is not on your list')
      return
    }
    AppState.watchList.splice(i, 1)
    this.saveWatchlist()
    Pop.toast(`removed ${movie.title}`, 'success')
  }
}

export const watchlistService = new WatchlistService()