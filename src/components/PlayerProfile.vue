<template>
  <section
    id="Player">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="level">
            <div class="level-left">
              <h1 class="title">{{ player.steamname }}</h1>
            </div>
            <figure class="level-right image is-128x128">
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
              <player-role :role="player.roles[0]"/>
              <h3>Carry</h3>
              <player-role :role="player.roles[1]"/>
              <h3>Offlane</h3>
              <player-role :role="player.roles[2]"/>
              <h3>Support(4)</h3>
              <player-role :role="player.roles[3]"/>
              <h3>Support(5)</h3>
              <player-role :role="player.roles[4]"/>
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
  data () {
    return {
      player: null
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
      switch (this.id) {
        case 161440418:
          this.player = {
            id: 161440418,
            steamname: 'Crazy-Duck',
            steamid: '76561198121706146',
            rank: 62,
            statement: 'I am support, I play Oracle',
            roles: [1, 4, 3, 4, 5]
          }
          break
        case 27997450: {
          this.player = {
            id: 27997450,
            steamname: 'Mikel',
            steamid: '76561197988263178',
            rank: 72,
            statement: 'I am carry, I dodge enemy',
            roles: [4, 5, 3, 2, 1]
          }
          break
        }
        case 187713322: {
          this.player = {
            id: 187713322,
            steamname: 'Firefiend',
            steamid: '76561198147979050',
            rank: 65,
            statement: 'I am mid, I play OD',
            roles: [5, 4, 3, 2, 1]
          }
          break
        }
      }
    }
  }
}
</script>
