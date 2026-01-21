import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import GyUiPlus from '../../../packages'
import '../../../packages/gy-table/style/table.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册ElementPlus
    app.use(ElementPlus, {
      locale: zhCn, // 语言设置
    })
    // 注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }

    app.use(GyUiPlus)
  },
} satisfies Theme
