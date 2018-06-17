export default {
  SET_SEASONS (state, seasons) {
    state.seasons = seasons
  },
  SET_DIVISIONS (state, divisions) {
    state.divisions = divisions
  },
  SET_CURRENT_DIVISION (state, division) {
    state.currentDivision = division
  },
  SET_CURRENT_STANDINGS (state, standings) {
    state.standings = standings
  },
  SET_PLAYERS (state, players) {
    state.players = players
  },
  SET_SERIES (state, series) {
    state.series = series
  },
  SET_CURRENT_PLAYER (state, player) {
    state.currentPlayer = player
  },
  SET_CURRENT_TEAM_INFO (state, info) {
    state.currentTeam.info = info
  },
  SET_CURRENT_TEAM_PLAYERS (state, players) {
    state.currentTeam.players = players
  }
}
