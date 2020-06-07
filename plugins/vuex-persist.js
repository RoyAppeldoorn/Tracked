import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      getItem: key => (process.client ? window.localStorage.getItem(key) : null),
      setItem: (key, value) => window.localStorage.setItem(key, value),
      removeItem: key => window.localStorage.removeItem(key)
      /* your options */
    }).plugin(store)
  })
}
