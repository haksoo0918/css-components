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
    // nextLinks: true, // not work
    // prevLinks: true,
    navbar: [
      // {
      //   text: 'Components',
      //   link: '/components/avatar'
      // }
      {
        text: 'GitHub',
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
          {
            text: 'utils',
            link: '/sass/utils',
          },
        ]
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
            text: 'Button',
            link: '/css-components/button',
          },
          {
            text: 'Card',
            link: '/css-components/card',
          },
          {
            text: 'Dialog',
            link: '/css-components/dialog',
          },
          {
            text: 'Divider',
            link: '/css-components/divider',
          },
          {
            text: 'Empty',
            link: '/css-components/empty',
          },
          {
            text: 'Image',
            link: '/css-components/image',
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
            text: 'Progress',
            link: '/css-components/progress',
          },
          {
            text: 'Table',
            link: '/css-components/table',
          },
          {
            text: 'Tag',
            link: '/css-components/tag',
          },
        ],
      },
      {
        text: 'Vue Components',
        collapsible: true,
        children: [
          {
            text: 'Dropdown',
            link: '/vue-components/dropdown',
          },
          {
            text: 'Modal',
            link: '/vue-components/modal',
          },
        ]
      },
      {
        text: 'Favorites',
        link: '/favorites'
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