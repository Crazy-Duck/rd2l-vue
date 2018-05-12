<template>
  <section
    id="season">
    <section class="hero is-primary is-bold">
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
                :key="d"
                :class="[{'is-active': currentDivision === d}]"
                @click="currentDivision = d">
                <a>{{ d }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <nav
      id="seasonTabs"
      class="tabs">
      <div class="container">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.name"
            :class="[{'is-active': currentTab.name === tab.name}]"
            @click="currentTab = tab"><a>{{ tab.name }}</a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <component
        :is="currentTab.component"
        :season="season"
        :division="currentDivision"/>
    </div>
  </section>
</template>

<script>
import SeasonSeriesList from './SeasonSeriesList.vue'
import SeasonStanding from './SeasonStanding.vue'
import PlayerList from './PlayerList.vue'

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
      currentTab: tabs[0],
      divisions: null,
      currentDivision: null
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
      this.divisions = this.season === 13 ? ['CET-WED', 'CET-SAT'] : ['CET-WED', 'CET-SUN']
      this.currentDivision = this.divisions[0]
    }
  }
}
</script>
