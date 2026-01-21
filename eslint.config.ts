import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // 检查的文件类型
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  // 忽略的文件
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  // Vue 基础规则
  pluginVue.configs['flat/essential'],
  // TypeScript 推荐规则
  vueTsConfigs.recommended,
  // 跳过 Prettier 格式化（由 Prettier 处理）
  skipFormatting,
  // 自定义规则
  {
    rules: {
      // 允许单单词组件名（大屏开发常用）
      'vue/multi-word-component-names': 'off',
      // 允许未使用的变量（开发中可能暂时未使用）
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      // 允许 any 类型（大屏开发中可能需要）
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许 console（大屏开发调试需要）
      'no-console': 'off',
    },
  },
)
