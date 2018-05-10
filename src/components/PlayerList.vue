<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th><font-awesome-icon :icon="['fab', 'steam']"/> Steam</th>
        <SortableHeader
          :title="'Medal'"
          :text="'M'"
          :sorted="sortedOn == 'rank'"
          @sort="sort('rank', $event)"/>
      </tr>
    </thead>
    <tbody
      is="transition-group"
      name="player-list">
      <tr
        is="PlayerListItem"
        v-for="(player, index) in players"
        :idx="index"
        :player="player"
        :key="player.id"/>
    </tbody>
  </table>
</template>

<style scoped>
  .player-list-move {
    transition: transform 1s;
  }
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import SortableHeader from './SortableHeader.vue'
import PlayerListItem from './PlayerListItem.vue'
export default {
  name: 'PlayerList',
  components: {
    FontAwesomeIcon,
    SortableHeader,
    PlayerListItem
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
      players: null,
      sortedOn: 'rank'
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  created () {
    this.fetchData()
  },
  methods: {
    sort (column, direction) {
      this.players.sort((a, b) => direction * (a[column] - b[column]))
      this.sortedOn = column
    },
    fetchData () {
      this.players = null
      this.loading = true
      if (this.season === 13) {
        this.players = [{
          id: 1234567,
          steamname: 'Crazy-Duck',
          rank: 62
        }]
      } else {
        this.players = [{
          id: 1111111,
          steamname: 'Mikel',
          rank: 72
        }, {
          id: 9999999,
          steamname: 'Firefiend',
          rank: 65
        }]
      }
      this.loading = false
    }
  }
}
</script>
