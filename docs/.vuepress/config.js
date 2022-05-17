const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')
// const path = require('path')

module.exports = {
  base: '/css-components/',
  lang: 'ko',
  title: 'CSS Components',
  description: 'CSS Components',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/css-components/favicon.svg' }]
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