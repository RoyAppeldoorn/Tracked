export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo_gradient.svg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Londrina+Outline&display=swap'
      }
    ],
    script: [{ src: 'https://w.soundcloud.com/player/api.js' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDb6ktzrQEybcxcz12EyMORPURZxHoDkJc',
          authDomain: 'tracked-8e216.firebaseapp.com',
          databaseURL: 'https://tracked-8e216.firebaseio.com',
          projectId: 'tracked-8e216',
          storageBucket: 'tracked-8e216.appspot.com',
          messagingSenderId: '585247816189',
          appId: '1:585247816189:web:9812c90c70bc57d7d1c194'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
