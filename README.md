# gy-ui-plus

一个基于 Vue 3 开发的企业级 UI 组件库，提供丰富的组件和功能，帮助开发者快速构建高质量的前端应用。

## 特性

- 基于 Vue 3 + TypeScript 开发，提供完整的类型定义
- 组件设计遵循现代 UI/UX 设计理念
- 支持按需引入，减小打包体积
- 丰富的组件功能和配置选项
- 基于 Element Plus 扩展，保持良好的兼容性

## 安装

使用 npm 或 yarn 安装：

```bash
npm install gy-ui-plus
# 或
yarn add gy-ui-plus
```

## 快速开始

### 完整引入

在 main.ts 中引入组件库及样式：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import GyUiPlus from 'gy-ui-plus'
import 'gy-ui-plus/dist/gy-ui-plus.css'

const app = createApp(App)
app.use(GyUiPlus)
app.mount('#app')
```

### 按需引入

可以单独引入需要的组件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { JButton, JTable } from 'gy-ui-plus'
import 'gy-ui-plus/dist/gy-ui-plus.css'

const app = createApp(App)
app.component('JButton', JButton)
app.component('JTable', JTable)
app.mount('#app')
```

## 组件文档

## 开发

### 环境要求

- Node.js >= 20.19.0
- npm >= 10.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建组件库

```bash
npm run lib
```

## 项目结构

```
gy-ui-plus/
├── packages/             # 组件源码目录
│   ├── index.ts         # 组件库入口
│   ├── withInstall.ts   # 组件安装工具
│   ├── j-button/        # 按钮组件
│   └── j-table/         # 表格组件
├── dist/                # 构建输出目录
├── vite.config.ts       # Vite 配置
├── tsconfig.json        # TypeScript 配置
└── package.json         # 项目配置
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues:
- Email: your.email@example.com

---

感谢使用 gy-ui-plus！
