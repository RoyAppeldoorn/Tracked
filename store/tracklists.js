export const state = () => ({})

export const mutations = {}

export const actions = {
  getTracklist({ commit }, id) {
    return this.$axios
      .get('/tracklist/' + id)
      .then(tracklist => {
        return tracklist
      })
      .catch(error => {
        console.log(error)
      })
  },
  createTracklist({ commit }, tracklist) {
    return this.$axios
      .post('/tracklist/create', tracklist)
      .then(id => {
        return id
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const getters = {}
