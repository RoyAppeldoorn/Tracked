export const state = () => ({
  user: null,
  error: null
})

export const mutations = {
  SET_USER(state, user) {
    if (state.user == null) {
      state.user = user
    } else {
      Object.assign(state.user, user)
    }
  },
  SET_AUTH_TOKEN(state, token) {
    state.user = { ...state.user, token }
  },
  SET_ERROR(state, payload) {
    state.error = payload
  }
}

export const actions = {
  login({ commit }, account) {
    // login the user
    this.$fireAuth
      .signInWithEmailAndPassword(account.email, account.password)
      .then(() => {
        this.$fireAuth.currentUser
          .getIdToken(true)
          .then(token => {
            commit('SET_AUTH_TOKEN', token)
          })
          .catch(error => console.log(error))
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  },
  async logout() {
    try {
      if (process.client) {
        window.localStorage.removeItem('vuex')
      }

      await this.$fireAuth.signOut()
      this.$router.push('/login')
    } catch (error) {
      alert('Something went wrong.. please try again')
    }
  },
  register({ commit }, account) {
    this.$fireAuth
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(() => {
        this.$fireAuth.currentUser
          .getIdToken(true)
          .then(token => {
            commit('SET_AUTH_TOKEN', token)

            this.$axios
              .post('/auth/register', { nickname: account.nickname })
              .then(() => {
                this.$router.push('/')
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(error => {
            commit('SET_ERROR', error.message)
          })
      })
      .catch(error => {
        commit('SET_ERROR', error.message)
      })
  },
  refreshFirebaseToken({ commit }) {
    return this.$fireAuth.currentUser.getIdToken(true).then(idToken => {
      commit('SET_AUTH_TOKEN', idToken)
      return idToken
    })
  },
  onAuthStateChanged({ commit, dispatch }, { authUser }) {
    if (!authUser) {
      // eslint-disable-next-line no-console
      console.log('Not authenticated')
      return
    }

    const { uid, email } = authUser
    commit('SET_USER', { uid, email })
  }
}

export const getters = {
  isAuthenticated: state => !!state.user,
  token: state => {
    return state.user != null ? state.user.token : null
  }
}
