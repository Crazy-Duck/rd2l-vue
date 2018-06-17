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
import SortableHeader from './SortableHeader.vue'
import SeasonStandingItem from './SeasonStandingItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'SeasonStanding',
  components: {
    SortableHeader,
    SeasonStandingItem
  },
  data () {
    return {
      sortedOn: 'wins'
    }
  },
  computed: {
    ...mapState({
      standings: 'standings'
    })
  },
  methods: {
    sort (column, direction) {
      this.standings.sort((a, b) => direction * (a[column] - b[column]))
      this.sortedOn = column
    }
  }
}
</script>
