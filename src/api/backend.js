import axios from 'axios'
import Long from 'long'

axios.defaults.baseURL = 'http://localhost:8000/api/'

export default {
  getSeasons () {
    return axios
      .get(`/seasons`)
      .then(response => response.data)
      .catch(err => {
        console.log(err)
        return []
      })
  },
  getDivisionsBySeason (season) {
    return axios
      .get(`/seasons/${season}/competitions`)
      .then(response => response.data)
      .catch(err => {
        console.log(err)
        return []
      })
  },
  getDivisionStandings (season, division) {
    return axios
      .get(`/seasons/${season}/competitions/${division}/standings`)
      .then(standings => standings.data)
  },
  getDivisionPlayers (season, division) {
    return axios
      .get(`/seasons/${season}/competitions/${division}/players`)
      .then(players => players.data)
  },
  getDivisionSeries (season, division) {
    return axios
      .get(`/seasons/${season}/competitions/${division}/series`)
      .then(series => series.data)
  },
  getPlayerById (id) {
    return axios
      .get(`/players/${id}`)
      .then(player => player.data)
      .then(player => {
        player.steamid = Long.fromNumber(player.id, false).add('76561197960265728').toString()
        player.roles = [0, 0, 0, 0, 0]
        return player
      })
  },
  getTeamInfoById (id) {
    return axios
      .get(`/teams/${id}`)
      .then(team => team.data)
      .then(info => {
        info.picture = info.picture || 'https://bulma.io/images/placeholders/256x256.png'
        return info
      })
  },
  getTeamPlayersById (id) {
    return axios
      .get(`/teams/${id}/players`)
      .then(players => players.data)
  }
}
