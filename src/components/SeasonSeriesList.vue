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
        v-for="series in matchups"
        :series="series"
        :key="series.id"/>
    </tbody>
  </table>
</template>

<script>
import SeasonSeriesItem from './SeasonSeriesItem.vue'
export default {
  name: 'SeasonSeriesList',
  components: {
    SeasonSeriesItem
  },
  props: {
    season: {
      type: Number,
      required: true,
      validator: value => value > 0
    }
  },
  data () {
    return {
      loading: false,
      matchups: null
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.matchups = null
      this.loading = true
      if (this.season === 13) {
        this.matchups = [
          {id: 0, home: 'German Farmers', away: 'Severely Underwhelming'},
          {id: 1, home: 'Severely Underwhelming', away: '4 Whites & a yolk', score: '2 - 0'}
        ]
      } else {
        this.matchups = [
          {id: 0, home: 'German Farmers', away: 'Severely Underwhelming'}
        ]
      }
      this.loading = false
    }
  }
}
</script>
