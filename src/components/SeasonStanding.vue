<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th><abbr title="Position">Pos</abbr></th>
        <th>Team</th>
        <SortableHeader
          :title="'Wins'"
          :text="'W'"
          :sorted="sortedOn == 'wins'"
          @sort="sort('wins', $event)"/>
        <SortableHeader
          :title="'Lost'"
          :text="'L'"
          :sorted="sortedOn == 'loss'"
          @sort="sort('loss', $event)"/>
        <SortableHeader
          :title="'Ties'"
          :text="'T'"
          :sorted="sortedOn == 'ties'"
          @sort="sort('ties', $event)"/>
      </tr>
    </thead>
    <tbody
      is="transition-group"
      name="standing-list">
      <tr
        is="SeasonStandingItem"
        v-for="(team, index) in standings"
        :idx="index"
        :team="team"
        :key="team.id"/>
    </tbody>
  </table>
</template>

<style scoped>
  .standing-list-move {
    transition: transform 1s;
  }
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SortableHeader from './SortableHeader.vue'
import SeasonStandingItem from './SeasonStandingItem.vue'
export default {
  name: 'SeasonStanding',
  components: {
    FontAwesomeIcon,
    SortableHeader,
    SeasonStandingItem
  },
  props: {
    season: {
      type: Number,
      required: true,
      validator: value => value > 0
    },
    division: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      standings: null,
      sortedOn: 'wins'
    }
  },
  watch: {
    '$route': 'fetchData',
    division: 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    sort (column, direction) {
      this.standings.sort((a, b) => direction * (a[column] - b[column]))
      this.sortedOn = column
    },
    fetchData () {
      this.standings = null
      this.loading = true
      if (this.season === 13) {
        if (this.division === 'CET-WED') {
          this.standings = [
            {id: 0, name: 'German Farmers', wins: 10, loss: 1, ties: 0},
            {id: 1, name: 'Strong & stable', wins: 9, loss: 0, ties: 2},
            {id: 2, name: '4 Whites & a yolk', wins: 7, loss: 2, ties: 2}
          ]
        } else {
          this.standings = [
            {id: 0, name: 'Evil Geniuses', wins: 10, loss: 1, ties: 0},
            {id: 1, name: 'Optic Gaming', wins: 9, loss: 0, ties: 2},
            {id: 2, name: 'Complexity', wins: 7, loss: 2, ties: 2}
          ]
        }
      } else {
        if (this.division === 'CET-WED') {
          this.standings = [
            {id: 3, name: '4PM', wins: 11, loss: 0, ties: 2},
            {id: 4, name: 'Beast', wins: 10, loss: 1, ties: 1},
            {id: 5, name: '4 Whites & a yolk', wins: 7, loss: 2, ties: 3}
          ]
        } else {
          this.standings = [
            {id: 0, name: 'Virtus Pro', wins: 10, loss: 1, ties: 0},
            {id: 1, name: 'Fly To Moon', wins: 9, loss: 0, ties: 2},
            {id: 2, name: 'Vega', wins: 7, loss: 2, ties: 2}
          ]
        }
      }
      this.loading = false
    }
  }
}
</script>
