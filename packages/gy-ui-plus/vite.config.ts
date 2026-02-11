import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: resolve(__dirname, '../..'),
      include: [
        resolve(__dirname, '../../packages/**/*.ts'),
        resolve(__dirname, '../../packages/**/*.vue'),
      ],
      exclude: [
        resolve(__dirname, '../../packages/**/__tests__/**'),
        resolve(__dirname, '../../node_modules/**'),
        resolve(__dirname, '../../dist/**'),
      ],
      outDir: resolve(__dirname, '../../dist'),
      copyDtsFiles: true,
      rollupTypes: false,
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../', import.meta.url)),
      '@gy-ui-plus/core': resolve(__dirname, '../core/withInstall.ts'),
      '@gy-ui-plus/button': resolve(__dirname, '../button/index.ts'),
      '@gy-ui-plus/table': resolve(__dirname, '../table/index.ts'),
      '@gy-ui-plus/layout-page': resolve(__dirname, '../layout-page/index.ts'),
    },
  },
  // 库构建配置
  build: {
    lib: {
      entry: fileURLToPath(new URL('../index.ts', import.meta.url)),
      name: 'gy-ui-plus',
      fileName: (format) => `gy-ui-plus.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vue',
        'element-plus',
        '@element-plus/icons-vue',
        'sortablejs',
        'axios',
        'vue-router',
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus',
          '@element-plus/icons-vue': 'ElementPlusIconsVue',
          sortablejs: 'Sortable',
          axios: 'axios',
          'vue-router': 'VueRouter',
        },
        exports: 'named',
      },
    },
    outDir: resolve(__dirname, '../../dist'),
    emptyOutDir: true,
  },
})
