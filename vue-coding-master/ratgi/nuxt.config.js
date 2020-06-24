module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ratgi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' , height: '6px' },
  /*
  ** Build configuration
  */
  css: [
    '~/assets/css/main.css'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // if (!isDev) {
      //   config.output.publicPath = './_nuxt/'
      // }
    },
    // assetsPublicPath: './',
    // publicPath: 'https://actionbeem.github.io/ratgi/'
    // assetsSubDirectory: './_nuxt/'
    // publicPath: '/_nuxt/'
  },
  // router: {
  //   base: '/test/'
  // }
}

