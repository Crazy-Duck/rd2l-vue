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
        :class="player.captain?'is-selected':''"
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
    teamid: {
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
      if (this.teamid === 1) {
        this.players = [{
          id: 161440418,
          steamname: 'Crazy-Duck',
          rank: 62,
          captain: true
        }]
      } else {
        this.players = [{
          id: 27997450,
          steamname: 'Mikel',
          rank: 72
        }, {
          id: 187713322,
          steamname: 'Firefiend',
          rank: 65,
          captain: true
        }]
      }
      this.loading = false
    }
  }
}
</script>
