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
          <div class="tile is-3 is-parent">
            <div class="article tile is-child box">
              <figure class="image is-256x256">
                <img :src="image">
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

<style scoped>
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import TeamPlayers from '@/components/TeamPlayers.vue'
export default {
  name: 'PlayerProfile',
  components: {
    FontAwesomeIcon,
    TeamPlayers
  },
  props: {
    id: {
      type: Number,
      required: true,
      validator: value => value > 0
    }
  },
  data () {
    return {
      name: null,
      image: null
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
      this.name = '4PM'
      this.image = 'https://bulma.io/images/placeholders/256x256.png'
    }
  }
}
</script>
