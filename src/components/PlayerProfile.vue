<template>
  <section
    id="PlayerProfile">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <h1 class="title">{{ player.steamname }}</h1>
            </div>
            <figure class="level-right image is-64x64">
              <img
                :src="`https://www.opendota.com/assets/images/dota2/rank_icons/rank_star_${player.rank % 10}.png`"
                class="medal">
              <img
                :src="`https://www.opendota.com/assets/images/dota2/rank_icons/rank_icon_${Math.floor(player.rank / 10)}.png`"
                class="medal">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-4 is-parent">
            <div class="article tile is-child box">
              <h3>Mid</h3>
              <player-role :role="player.roles[0] || 0"/>
              <h3>Carry</h3>
              <player-role :role="player.roles[1] || 0"/>
              <h3>Offlane</h3>
              <player-role :role="player.roles[2] || 0"/>
              <h3>Support(4)</h3>
              <player-role :role="player.roles[3] || 0"/>
              <h3>Support(5)</h3>
              <player-role :role="player.roles[4] || 0"/>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              {{ player.statement }}
            </article>
            <div>
              <a
                :href="`https://steamcommunity.com/profiles/${player.steamid}`"
                class="button is-large">
                <font-awesome-icon :icon="['fab', 'steam']"/>
              </a>
              <a
                :href="`https://www.opendota.com/players/${id}`"
                class="button is-large">
                <span class="icon">
                  <img src="https://www.opendota.com/assets/images/icons/icon-128x128.png">
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
  .medal {
    position: absolute;
  }
</style>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import PlayerRole from './PlayerRole.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PlayerProfile',
  components: {
    FontAwesomeIcon,
    PlayerRole
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
      player: 'currentPlayer'
    })
  },
  watch: {
    '$route.params.id' (id) {
      this.loadPlayerById(id)
    }
  },
  created () {
    this.loadPlayerById(this.id)
  },
  methods: {
    ...mapActions({
      loadPlayerById: 'loadPlayerById'
    })
  }
}
</script>
