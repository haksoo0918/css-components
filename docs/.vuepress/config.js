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
    nextLinks: true,
    prevLinks: true,
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
        text: 'SASS',
        collapsible: true,
        children: [
          {
            text: 'mixins',
            link: '/sass/mixins',
          },
          {
            text: 'variables',
            link: '/sass/variables',
          },
        ]
      },
      {
        test: 'Tags',
        collapsible: true,
        children: [
          {
            text: 'Button',
            link: '/tags/button',
          },
          {
            text: 'Dialog',
            link: '/tags/dialog',
          },
          {
            text: 'Divider',
            link: '/tags/divider',
          },
          {
            text: 'Image',
            link: '/tags/image',
          },
          {
            text: 'Progress',
            link: '/tags/progress',
          },
          {
            text: 'Table',
            link: '/tags/table',
          },
        ],
      },
      {
        text: 'CSS Components',
        collapsible: true,
        children: [
          {
            text: 'Accordion',
            link: '/css-components/accordion',
          },
          {
            text: 'Avatar',
            link: '/css-components/avatar',
          },
          {
            text: 'Breadcrumbs',
            link: '/css-components/breadcrumbs',
          },
          {
            text: 'Card',
            link: '/css-components/card',
          },
          {
            text: 'Empty',
            link: '/css-components/empty',
          },
          {
            text: 'Loading',
            link: '/css-components/loading',
          },
          {
            text: 'Navbar',
            link: '/css-components/navbar',
          },
          {
            text: 'Pagination',
            link: '/css-components/pagination',
          },
          {
            text: 'Tag',
            link: '/css-components/tag',
          },
        ],
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
  ]
}