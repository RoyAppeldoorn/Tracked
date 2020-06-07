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
    try {
      await this.$fireAuth.signOut()
      this.$router.push('/')
    } catch (error) {
      alert('Something went wrong.. please try again')
    }
  },
  register({ commit }, account) {
    this.$fireAuth
      .createUserWithEmailAndPassword(account.email, account.password)
      .then(() => {
        this.$axios
          .post('/auth/register', { nickname: account.nickname })
          .then(() => {
            console.log('good')
            this.$router.go(-1)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  },
  async onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      // eslint-disable-next-line no-console
      console.log('Not authenticated')
      return
    }

    let token = null

    try {
      token = await this.$fireAuth.currentUser.getIdToken(true)
    } catch (error) {
      console.log(error)
    }

    if (!token) {
      alert("Token couldn't be fetched. Firebase may be down")
    }

    const { uid, email } = authUser
    commit('SET_USER', { uid, email, token })
  }
}

export const getters = {
  getToken: state => {
    if (state.user) {
      return state.user.token ? state.user.token : null
    }
  }
}
