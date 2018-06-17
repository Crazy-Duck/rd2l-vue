import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    seasons: [],
    divisions: [],
    standings: [],
    players: [],
    series: [],
    currentDivision: {},
    currentPlayer: {
      roles: []
    },
    currentTeam: {
      info: {},
      players: []
    }
  },
  actions,
  mutations
})

export default store
