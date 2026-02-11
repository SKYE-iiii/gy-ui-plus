import type { Component, App } from 'vue'
import { GyButton } from '@gy-ui-plus/button'
import { GyTable } from '@gy-ui-plus/table'
import { GyLayoutPage } from '@gy-ui-plus/layout-page'

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  GyButton,
  GyTable,
  GyLayoutPage,
}

// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}

// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}

// 按需引入
export { GyButton, GyTable, GyLayoutPage }

// 默认导出插件
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}
