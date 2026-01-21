import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GY-UI-Plus',
  description: '一个基于 Vue 3 的 UI 组件库',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/gy-button' },
      { text: 'GitHub', link: 'https://github.com/yourusername/gy-ui-plus' },
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'GyButton', link: '/components/gy-button' },
          { text: 'GyTable', link: '/components/gy-table' },
        ],
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        '@': '/packages',
      },
    },
  },
})
