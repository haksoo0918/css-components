const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')

module.exports = {
  lang: 'ko',
  title: 'CSS Components',
  description: 'CSS Components',
  head: [],
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Avatar',
        link: '/avatar'
      }
    ],
  }),
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
  ]
}