const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')
// const path = require('path')

module.exports = {
  base: '/css-components/',
  lang: 'ko',
  title: 'hs CSS Components',
  description: 'CSS Components',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/css-components/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding:wght@400;700&display=swap' }],
  ],
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Avatar',
        link: '/avatar'
      },
      {
        text: 'Breadcrumbs',
        link: '/breadcrumbs'
      },
      {
        text: 'Button',
        link: '/button'
      },
      {
        text: 'Card',
        link: '/card'
      },
      {
        text: 'Dialog',
        link: '/dialog'
      },
      {
        text: 'Divider',
        link: '/divider'
      },
      {
        text: 'Empty',
        link: '/empty'
      },
      {
        text: 'Image',
        link: '/image'
      },
      {
        text: 'Navbar',
        link: '/navbar'
      },
    ],
  }),
  // sass: {
  //   prependData: `
  //     @import '@styles/variables';
  //   `
  // },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@styles': path.resolve(__dirname, "./styles")
  //     }
  //   }
  // },
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search ...'
        }
      }
    }),
    backToTopPlugin(),
    gitPlugin(),
    // palettePlugin(),
  ]
}