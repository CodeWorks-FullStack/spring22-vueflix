<template>
  <Modal :id="'m-' + movie.id">
    <template #modal-title>
      {{ movie.title }}
    </template>
    <template #modal-body>
      <div class="text-center">
        <img class="movie-img" :src="movie.img" alt="" />
      </div>
      <div class="row py-3">
        <div class="col-md-6 d-flex align-items-center">
          <p>
            {{ movie.overview }}
          </p>
        </div>
        <div class="col-md-6">
          <img :src="movie.poster2" alt="movie poster" class="img-fluid" />
        </div>
      </div>
    </template>
  </Modal>
</template>


<script>
import { Movie } from '../models/Movie.js'
export default {
  props: {
    movie: {
      type: Movie,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.movie-img {
  object-fit: cover;
  object-position: center top;
  max-height: 450px;
}
</style>