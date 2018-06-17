<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Home</th>
        <th class="has-text-centered">Score</th>
        <th class="has-text-right">Away</th>
      </tr>
    </thead>
    <tbody>
      <tr
        is="SeasonSeriesItem"
        v-for="match in matchups"
        :series="match"
        :key="match.id"/>
    </tbody>
  </table>
</template>

<script>
import SeasonSeriesItem from './SeasonSeriesItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'SeasonSeriesList',
  components: {
    SeasonSeriesItem
  },
  computed: {
    ...mapState({
      matchups: 'series'
    })
  }
}
</script>
