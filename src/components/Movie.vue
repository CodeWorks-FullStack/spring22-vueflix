<template>
  <div class="card">
    <div class="position-absolute" style="right: 0">
      <button
        class="
          btn
          selectable
          text-secondary text-uppercase
          square-left square-bottom
          bg-dark
          fade-darken-60
        "
        @click="addToWatchlist(movie)"
        v-if="!onMyList"
        title="add to favorites"
      >
        <i class="mdi mdi-star-outline f-24 text-secondary lighten-20"></i>
      </button>
      <button
        class="btn square-left square-bottom btn-warning"
        @click="remove(movie)"
        v-else
        title="remove from favorties"
      >
        <i class="mdi mdi-star f-24"></i>
      </button>
    </div>
    <img :src="movie.img" alt="" class="rounded-top movie-img" loading="lazy" />
    <div class="card-body">
      <div class="">
        <h3 class="d-flex align-items-center justify-content-between">
          <span>{{ movie.title }}</span>
          <span>{{ movie.score }}</span>
        </h3>
        <p class="clip-text">
          {{ movie.overview }}
        </p>
        <div class="text-center">
          <button
            type="button"
            class="btn selectable text-secondary text-uppercase"
            data-bs-toggle="modal"
            :data-bs-target="'#m-' + movie.id"
            title="more details"
          >
            <i class="mdi mdi-chevron-up f-20"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
  <MovieDetails :movie="movie" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { Movie } from '../models/Movie.js'
import { AppState } from '../AppState.js'
import { watchlistService } from '../services/WatchlistService.js'
export default {
  props: {
    movie: { type: Movie, required: true }
  },
  setup(props) {
    return {
      onMyList: computed(() => {
        const movie = AppState.watchList.find(m => m.id === props.movie.id)
        // converts truthy to true/false
        return !!movie
      }),
      addToWatchlist(movie) {
        watchlistService.addMovie(movie)
      },
      remove(movie) {
        watchlistService.remove(movie)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.movie-img {
  object-fit: cover;
  object-position: center top;
  max-height: 450px;
}
</style>