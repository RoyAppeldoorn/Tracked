export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER(state, account) {
    state.user = account
  }
}

export const actions = {
  async login({ commit }, account) {
    try {
      // login the user
      await this.$fireAuth.signInWithEmailAndPassword(account.email, account.password)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  async logout() {
    await this.$fireAuth.signOut()
    this.$router.push('/')
  },
  async onAuthStateChanged({ commit, dispatch }, { authUser, claims }) {
    // eslint-disable-next-line no-console
    if (!authUser) {
      // eslint-disable-next-line no-console
      console.log('not logged in')
    } else {
      try {
        const token = await this.$fireAuth.currentUser.getIdToken(true)
        this.$axios.defaults.headers.common['X-Firebase-Auth'] = token

        const { uid, email } = authUser
        commit('SET_USER', { uid, email })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    }
  }
}

export const getters = {}
