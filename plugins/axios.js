export default function({ $axios, $fireAuth, store }) {
  let isRefreshing = false
  let subscribers = []

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
    if (store.getters['user/token']) {
      config.headers.common['X-Firebase-Auth'] = store.getters['user/token']
    }
  })

  $axios.onResponse(res => {
    return res.data
  })

  $axios.onError(error => {
    const {
      config,
      response: { status }
    } = error
    const originalRequest = config

    if (status === 401) {
      if (!isRefreshing) {
        isRefreshing = true
        console.log(store.getters['user/token'])
        store.dispatch('user/refreshFirebaseToken').then(idToken => {
          console.log(idToken)
          isRefreshing = false
          onRefreshed(idToken)
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
  })

  function subscribeTokenRefresh(cb) {
    subscribers.push(cb)
  }

  function onRefreshed(newToken) {
    subscribers = subscribers.filter(callback => callback(newToken))
  }
}
