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
  async onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      // eslint-disable-next-line no-console
      console.log('Not authenticated')
      return
    }

    const token = await this.$fireAuth.currentUser.getIdToken(true)

    const { uid, email } = authUser
    commit('SET_USER', { uid, email, token })
    console.log('Authenticated with idToken ' + token)
  }
}

export const getters = {
  getToken: state => {
    if (state.user) {
      return state.user.token ? state.user.token : null
    }
  }
}
