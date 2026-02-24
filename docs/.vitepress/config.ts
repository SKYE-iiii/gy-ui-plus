import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugins/mdPlugin'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

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
      { text: '组件', link: '/components/gy-button' },
      { text: 'GitHub', link: 'https://github.com/SKYE-iiii/gy-ui-plus' },
    ],
    sidebar: {
      '/components': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/gy-button' },
            { text: 'Basic Table 表格', link: '/components/gy-table' },
            { text: 'Editable Table 可编辑表格', link: '/components/gy-table-editable' },
          ],
        },
      ],
    },
  },
  vite: {
    plugins: [vueJsx() as any],
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../packages'),
        '@gy-ui-plus/core': resolve(__dirname, '../../packages/core/withInstall.ts'),
        '@gy-ui-plus/button': resolve(__dirname, '../../packages/button/index.ts'),
        '@gy-ui-plus/table': resolve(__dirname, '../../packages/table/index.ts'),
        '@gy-ui-plus/layout-page': resolve(__dirname, '../../packages/layout-page/index.ts'),
        'gy-ui-plus': resolve(__dirname, '../../packages/index.ts'),
      },
    },
  },
})
