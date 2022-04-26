<template>
  <div class="watchlist container">
    <div class="row">
      <div class="col-md-4 p-3" v-for="m in watchlist" :key="m.id">
        <Movie :movie="m" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState.js'
export default {
  setup() {
    return {
      watchlist: computed(() => AppState.watchList)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>