<template>
  <section
    id="TeamProfile">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <h1 class="title">{{ name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-3 is-parent is-vertical">
            <div class="article tile is-child box">
              <figure class="image is-256x256">
                <img :src="picture">
              </figure>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <team-players :teamid="id"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import TeamPlayers from '@/components/TeamPlayers.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TeamProfile',
  components: {
    TeamPlayers
  },
  props: {
    id: {
      type: Number,
      required: true,
      validator: value => value > 0
    }
  },
  computed: {
    ...mapState({
      name: state => state.currentTeam.info.name,
      picture: state => state.currentTeam.info.picture
    })
  },
  watch: {
    '$route.params.id' (team) {
      this.loadTeamInfoById(team)
    }
  },
  created () {
    this.loadTeamInfoById(this.id)
  },
  methods: {
    ...mapActions({
      loadTeamInfoById: 'loadTeamInfoById'
    })
  }
}
</script>
