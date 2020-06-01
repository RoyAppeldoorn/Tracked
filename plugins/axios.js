export default function({ $axios, store }) {
  $axios.onRequest(config => {
    if (store.getters['user/getToken']) {
      config.headers.common['X-Firebase-Auth'] = store.getters['user/getToken']
    }
  })
}
