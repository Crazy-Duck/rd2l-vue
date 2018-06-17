<template>
  <nav
    class="navbar is-spaced has-shadow"
    role="navigation"
    aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          to="/">RD2L</router-link>
        <a
          :class="{ 'is-active': showNav}"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          @click="showNav = !showNav">
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>
      <div
        :class="{ 'is-active': showNav }"
        class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Seasons
            </a>
            <div class="navbar-dropdown">
              <router-link
                v-for="s in seasons"
                :key="s"
                :to="`/seasons/${s}`"
                class="navbar-item">Season {{ s }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      showNav: false
    }
  },
  computed: {
    ...mapState({
      seasons: 'seasons'
    })
  },
  created () {
    this.loadSeasons()
  },
  methods: {
    ...mapActions({
      loadSeasons: 'loadSeasons'
    })
  }
}
</script>
