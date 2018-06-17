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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'TeamPlayers',
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
      sortedOn: 'rank'
    }
  },
  computed: {
    ...mapState({
      players: state => state.currentTeam.players
    })
  },
  watch: {
    '$route.params.id' (team) {
      this.loadTeamPlayersById(team)
    }
  },
  created () {
    this.loadTeamPlayersById(this.teamid)
  },
  methods: {
    ...mapActions({
      loadTeamPlayersById: 'loadTeamPlayersById'
    }),
    sort (column, direction) {
      this.players.sort((a, b) => direction * (a[column] - b[column]))
      this.sortedOn = column
    }
  }
}
</script>
