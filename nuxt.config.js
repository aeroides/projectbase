const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  head: {
    title: '武钢财务系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { hid: 'description', name: 'description', content: '武钢财务系统' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },

  // 进度条
  loading: { color: '#3B8070' },
  router: {
    //middleware: "auth",
  },

  // 插件
  plugins: [
    {
      src: '~/plugins/ElementUI',
      ssr: true,
    }
  ],

  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  build: {
    vendor: ['axios', 'element-ui'],

    // Run ESLint on save
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1000 * 60 * 119 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ],
  /*
  ** Render configuration
  ** Turn off prefetch
  */
  render: {
    resourceHints: false
  }
}