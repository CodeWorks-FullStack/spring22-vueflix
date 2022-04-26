<template>
  <div class="home container-fluid">
    <div class="row mt-3">
      <div class="col-8">
        <SearchForm />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 p-3" v-for="m in movies" :key="m.id">
        <Movie :movie="m" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger.js'
import { moviesService } from '../services/MoviesService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  name: 'Home',
  setup() {
    let query = ref('')

    return {
      query,
      // anytime we need data from the appstate (that changes) use computed
      movies: computed(() => AppState.movies),
      async search() {
        try {
          await moviesService.search(query.value)
          query.value = ''
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message, 'error')
        }
      }
    }

  }
}
</script>

<style scoped lang="scss">
</style>
