export default {
  head: {
    title: 'distromari',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '~assets/scss/main.scss'
    ]
  },
  modules: [
    '@nuxt/content'
  ],
  target: 'static',
  router: {
    base: '/'
  }
}
