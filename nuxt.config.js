
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Tokyo City University Advent Calendar 2019 特設サイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:url', content: 'https://tcuac2019.netlify.com/'},
      { property: 'og:title', content: 'Tokyo City University Advent Calendar 2019 特設サイト'},
      { property: 'og:site_name', content: 'Tokyo City University Advent Calendar 2019 特設サイト'},
      { property: 'og:image', content: 'https://tcuac2019.netlify.com/img/ogp.png'},
      { property: 'og:description', content: '12月のはじめからクリスマスまでの25日間、東京都市大学に在籍する学生が持ち回りで自分の好きな話題について記事を執筆するイベントです。'},
      { property: 'twitter:card', content: 'summary_large_image'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-moment.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
