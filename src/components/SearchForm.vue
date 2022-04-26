<template>
  <form @submit.prevent="findMovies" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center">
      <label for="search" class="sr-only"></label>
      <input
        v-model="query"
        type="text"
        name="search"
        required
        class="form-control bg-white border-0"
        placeholder="search"
      />
      <button class="btn px-2 py-0" type="submit">
        <i class="mdi mdi-movie-search f-18"></i>
      </button>
    </div>
  </form>
  <div class="mt-3" v-if="totalPages">
    <h4>
      <i
        class="mdi mdi-chevron-left text-dark"
        :class="{
          selectable: currentPage > 1,
          'lighten-50': currentPage == 1,
        }"
        @click="changePage(-1)"
      ></i>
      {{ currentPage }} of {{ totalPages }}
      <i
        class="mdi mdi-chevron-right text-dark"
        :class="{
          selectable: currentPage != totalPages,
          'lighten-50': currentPage == totalPages,
        }"
        @click="changePage(1)"
      ></i>
    </h4>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { moviesService } from '../services/MoviesService.js'
import Pop from '../utils/Pop.js'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  setup() {
    const query = ref('')
    return {
      query,
      currentPage: computed(() => AppState.currentPage),
      totalPages: computed(() => AppState.totalPages),
      async findMovies() {
        try {
          await moviesService.search(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async changePage(value) {
        let newPage = AppState.currentPage + value
        if (newPage > AppState.totalPages || newPage <= 0) {
          Pop.toast("You are already there", 'warning')
          return
        }
        moviesService.changePage(newPage)
      }
    }
  }
}
</script>

<style>
</style>