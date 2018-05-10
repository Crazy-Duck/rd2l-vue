import Vue from 'vue'
import Router from 'vue-router'
import NavBar from '@/components/NavBar'
import HomePage from '@/components/HomePage'
import SeasonHome from '@/components/SeasonHome'

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
      path: '/season/:season',
      name: 'SeasonHome',
      components: {
        default: SeasonHome,
        navigation: NavBar
      },
      props: {
        default: route => ({ season: Number(route.params.season) })
      }
    }
  ]
})
