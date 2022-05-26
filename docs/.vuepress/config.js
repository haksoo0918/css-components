const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')
// const { containerPlugin } = require('@vuepress/plugin-container')
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
    navbar: [
      // {
      //   text: 'Components',
      //   link: '/components/avatar'
      // }
      {
        text: 'Github',
        link: 'https://github.com/haksoo0918/css-components'
      },
    ],
    sidebar: [
      {
        text: 'Components',
        collapsible: true,
        children: [
          {
            text: 'Accordion',
            link: '/components/accordion'
          },
          {
            text: 'Avatar',
            link: '/components/avatar'
          },
          {
            text: 'Breadcrumbs',
            link: '/components/breadcrumbs'
          },
          {
            text: 'Button',
            link: '/components/button'
          },
          {
            text: 'Card',
            link: '/components/card'
          },
          {
            text: 'Dialog',
            link: '/components/dialog'
          },
          {
            text: 'Divider',
            link: '/components/divider'
          },
          {
            text: 'Empty',
            link: '/components/empty'
          },
          {
            text: 'Image',
            link: '/components/image'
          },
          {
            text: 'Loading',
            link: '/components/loading'
          },
          {
            text: 'Navbar',
            link: '/components/navbar'
          },
        ],
      },
      {
        text: 'SASS',
        collapsible: true,
        children: [
          {
            text: 'variables',
            link: '/sass/variables'
          },
        ]
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
    // containerPlugin(),
    // palettePlugin(),
  ]
}