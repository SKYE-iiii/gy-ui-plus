import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugins/mdPlugin'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  title: 'GY-UI-Plus',
  base: '/gy-ui-plus/',
  description: '一个基于 Vue 3 的 UI 组件库',
  markdown: {
    lineNumbers: true,
    config: (md: any) => mdPlugin(md),
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/gy-button.md' },
      { text: 'GitHub', link: 'https://github.com/SKYE-iiii/gy-ui-plus' },
    ],
    sidebar: {
      '/components': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'GyButton', link: '/components/gy-button' },
            { text: 'GyTable', link: '/components/gy-table' },
          ],
        },
      ],
    },
  },
  vite: {
    plugins: [vueJsx() as any],
    resolve: {
      alias: {
        '@': '/packages',
      },
    },
  },
})
