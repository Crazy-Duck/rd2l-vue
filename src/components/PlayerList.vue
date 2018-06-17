<template>
  <table class="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th><font-awesome-icon :icon="['fab', 'steam']"/> Steam name</th>
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
import { mapState } from 'vuex'
export default {
  name: 'PlayerList',
  components: {
    FontAwesomeIcon,
    SortableHeader,
    PlayerListItem
  },
  data () {
    return {
      sortedOn: 'rank'
    }
  },
  computed: {
    ...mapState({
      players: 'players'
    })
  },
  methods: {
    sort (column, direction) {
      this.players.sort((a, b) => direction * (a[column] - b[column]))
      this.sortedOn = column
    }
  }
}
</script>
