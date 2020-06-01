export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  createTracklist(payload) {
    return this.$axios.post('/tracklist/add', payload)
  }
}

export const getters = {}
