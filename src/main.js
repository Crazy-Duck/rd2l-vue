import Vue from 'vue'
import App from './App'
import router from './router'
import fontawesome from '@fortawesome/fontawesome'
import faSteam from '@fortawesome/fontawesome-free-brands/faSteam'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import faSortDown from '@fortawesome/fontawesome-free-solid/faSortDown'
import faSortUp from '@fortawesome/fontawesome-free-solid/faSortUp'
import faSort from '@fortawesome/fontawesome-free-solid/faSort'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

fontawesome.library.add(faSort, faSortDown, faSortUp, faSteam, faDiscord)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
