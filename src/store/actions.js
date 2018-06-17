import api from '../api/backend'

export default {
  loadSeasons ({ commit }) {
    api
      .getSeasons()
      .then(seasons => commit('SET_SEASONS', seasons))
  },
  loadDivisionsBySeason ({ commit }, season) {
    api
      .getDivisionsBySeason(season)
      .then(divisions => {
        commit('SET_DIVISIONS', divisions)
        commit('SET_CURRENT_DIVISION', divisions[0])
        return divisions
      })
      .then(divisions => api.getDivisionStandings(season, divisions[0].id))
      .then(standings => commit('SET_CURRENT_STANDINGS', standings))
  },
  loadDivisionStanding ({ commit }, { season, division }) {
    api
      .getDivisionStandings(season, division)
      .then(standings => commit('SET_CURRENT_STANDINGS', standings))
  },
  loadDivisionPlayers ({ commit }, {season, division}) {
    api
      .getDivisionPlayers(season, division)
      .then(players => commit('SET_PLAYERS', players))
  },
  loadDivisionSeries ({ commit }, {season, division}) {
    api
      .getDivisionSeries(season, division)
      .then(series => commit('SET_SERIES', series))
  },
  loadPlayerById ({ commit }, id) {
    api
      .getPlayerById(id)
      .then(player => commit('SET_CURRENT_PLAYER', player))
  },
  loadTeamInfoById ({ commit }, id) {
    api
      .getTeamInfoById(id)
      .then(team => commit('SET_CURRENT_TEAM_INFO', team))
  },
  loadTeamPlayersById ({ commit }, id) {
    api
      .getTeamPlayersById(id)
      .then(team => commit('SET_CURRENT_TEAM_PLAYERS', team))
  }
}
