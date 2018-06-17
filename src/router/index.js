import Vue from 'vue'
import Router from 'vue-router'
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import SeasonHome from '@/components/SeasonHome'
import PlayerProfile from '@/components/PlayerProfile'
import TeamProfile from '@/components/TeamProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: {
        default: HomePage,
        navigation: NavBar
      }
    }, {
      path: '/seasons/:season',
      name: 'SeasonHome',
      components: {
        default: SeasonHome,
        navigation: NavBar
      },
      props: {
        default: route => ({ season: Number(route.params.season) })
      }
    }, {
      path: '/players/:id',
      name: 'PlayerProfile',
      components: {
        default: PlayerProfile,
        navigation: NavBar
      },
      props: {
        default: route => ({ id: Number(route.params.id) })
      }
    }, {
      path: '/teams/:id',
      name: 'TeamProfile',
      components: {
        default: TeamProfile,
        navigation: NavBar
      },
      props: {
        default: route => ({ id: Number(route.params.id) })
      }
    }
  ]
})
