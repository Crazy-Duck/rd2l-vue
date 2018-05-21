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
          {id: 0, home: {id: 0, name: 'German Farmers'}, away: {id: 1, name: 'Strong & stable'}},
          {id: 1, home: {id: 1, name: 'Strong & stable'}, away: {id: 2, name: '4 Whites & a yolk'}, score: '2 - 0'}
        ]
      } else {
        this.matchups = [
          {id: 2, home: {id: 0, name: 'German Farmers'}, away: {id: 2, name: '4 Whites & a yolk'}}
        ]
      }
      this.loading = false
    }
  }
}
</script>
