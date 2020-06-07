export default function({ $axios, $fireAuth, store }) {
  let isRefreshing = false
  let subscribers = []

  $axios.onRequest(
    config => {
      if (store.getters['user/token']) {
        config.headers.common['X-Firebase-Auth'] = store.getters['user/token']
      }
    },
    response => {
      return response
    },
    error => {
      const {
        config,
        response: { status }
      } = error
      const originalRequest = config

      if (status === 401) {
        if (!isRefreshing) {
          isRefreshing = true
          $fireAuth.currentUser.getIdToken(true).then(newIdToken => {
            isRefreshing = false
            store.commit('SET_AUTH_TOKEN', newIdToken)
            onRefreshed(newIdToken)
          })
        }

        const retryOriginalRequest = new Promise(resolve => {
          subscribeTokenRefresh(newToken => {
            // replace the expired token and retry
            originalRequest.headers['X-Firebase-Auth'] = newToken
            resolve($axios(originalRequest))
          })
        })

        return retryOriginalRequest
      }

      return Promise.reject(error)
    }
  )

  function subscribeTokenRefresh(cb) {
    subscribers.push(cb)
  }

  function onRefreshed(newToken) {
    subscribers = subscribers.filter(callback => callback(newToken))
  }
}
