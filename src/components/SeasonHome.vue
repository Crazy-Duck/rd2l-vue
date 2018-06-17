<template>
  <section
    id="season">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Season {{ season }}</h1>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed">
          <div class="container">
            <ul>
              <li
                v-for="d in divisions"
                :key="d.id"
                :class="[{'is-active': currentDivision.id === d.id}]"
                @click="updateCurrentDivision(d)">
                <a>{{ d.name }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nav
      id="seasonTabs"
      class="tabs is-boxed">
      <div class="container">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.name"
            :class="[{'is-active': currentTab.name === tab.name, 'tab': true}]"
            @click="currentTab = tab"><a>{{ tab.name }}</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <component
        :is="currentTab.component"/>
    </div>
  </section>
</template>

<script>
import SeasonSeriesList from './SeasonSeriesList.vue'
import SeasonStanding from './SeasonStanding.vue'
import PlayerList from './PlayerList.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

let tabs = [
  {name: 'Standings', component: SeasonStanding},
  {name: 'Matches', component: SeasonSeriesList},
  {name: 'Players', component: PlayerList}
]

export default {
  name: 'SeasonHome',
  components: {
    SeasonSeriesList,
    SeasonStanding,
    PlayerList
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
      tabs: tabs,
      currentTab: tabs[0]
    }
  },
  computed: {
    ...mapState({
      divisions: 'divisions',
      currentDivision: 'currentDivision'
    })
  },
  watch: {
    '$route.params.season' (season) {
      this.loadDivisionsBySeason(season)
    }
  },
  created () {
    this.loadDivisionsBySeason(this.season)
  },
  methods: {
    ...mapActions({
      loadDivisionsBySeason: 'loadDivisionsBySeason',
      loadDivisionStanding: 'loadDivisionStanding',
      loadDivisionPlayers: 'loadDivisionPlayers',
      loadDivisionSeries: 'loadDivisionSeries'
    }),
    ...mapMutations({
      setCurrentDivision: 'SET_CURRENT_DIVISION'
    }),
    updateCurrentDivision (division) {
      this.loadDivisionStanding({season: this.season, division: division.id})
      this.loadDivisionPlayers({season: this.season, division: division.id})
      this.loadDivisionSeries({season: this.season, division: division.id})
      this.setCurrentDivision(division)
    }
  }
}
</script>
