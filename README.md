# gy-ui-plus

一个基于 Vue 3 + Element Plus 二次封装的企业级 UI 组件库，提供高质量的封装组件，帮助开发者快速构建复杂的前端应用。

## 特性

- 基于 Vue 3 + TypeScript 开发，提供完整的类型定义
- 基于 Element Plus 深度封装，保持良好兼容性
- 支持按需引入，减小打包体积
- 提供 LayoutPage、Table、Button 等常用业务组件
- 内置虚拟滚动、列设置、单行编辑等高级功能
- 完善的代码规范和自动化工具链

## 安装

使用 npm、yarn 或 pnpm 安装：

```bash
npm install gy-ui-plus
# 或
yarn add gy-ui-plus
# 或
pnpm add gy-ui-plus
```

## 开发

本项目使用 monorepo 架构，基于 pnpm workspace 管理。详细说明请参考 [MONOREPO.md](./MONOREPO.md)。

### 开发环境要求

- Node.js: ^20.19.0 || >=22.12.0
- pnpm: >=8.0.0

### 本地开发

```bash
# 安装依赖
pnpm install

# 开发文档站点
pnpm docs:dev

# 构建组件库
pnpm build

# 类型检查
pnpm type-check

# 代码检查
pnpm lint
```

## 快速开始

### 完整引入

在 main.ts 中引入组件库：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import GyUiPlus from 'gy-ui-plus'
import 'gy-ui-plus/dist/style.css'

const app = createApp(App)
app.use(GyUiPlus)
app.mount('#app')
```

### 按需引入

可以单独引入需要的组件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { GyButton, GyTable, GyLayoutPage } from 'gy-ui-plus'
import 'gy-ui-plus/dist/style.css'

const app = createApp(App)
app.component('GyButton', GyButton)
app.component('GyTable', GyTable)
app.component('GyLayoutPage', GyLayoutPage)
app.mount('#app')
```

## 组件列表

### GyLayoutPage

布局页面组件，提供标准的页面布局结构。

### GyTable

增强表格组件，支持：

- 虚拟滚动（大数据量优化）
- 列设置（显示/隐藏列）
- 单行编辑
- 自定义列渲染
- 操作列配置

### GyButton

增强按钮组件，提供更多业务场景的按钮样式和功能。

## 开发

### 环境要求

- Node.js >= 20.19.0
- npm >= 10.0.0

### 安装依赖

```bash
npm install
```

### 构建组件库

```bash
npm run lib
```

### 代码检查和格式化

```bash
# 运行所有检查
npm run lint

# 仅运行 ESLint
npm run lint:eslint

# 仅运行 Oxlint
npm run lint:oxlint

# 格式化代码
npm run format
```

### 类型检查

```bash
npm run type-check
```

### 文档开发

```bash
# 启动文档开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览构建后的文档
npm run docs:preview
```

## 项目结构

```
gy-ui-plus/
├── packages/                     # 组件源码目录
│   ├── index.ts                 # 组件库入口文件
│   ├── withInstall.ts           # 组件安装工具函数
│   ├── button/                  # 按钮组件
│   │   ├── src/
│   │   │   ├── index.vue        # 组件实现
│   │   │   └── type.ts          # 类型定义
│   │   └── index.ts             # 组件导出
│   ├── table/                   # 增强表格组件
│   │   ├── src/
│   │   │   ├── index.vue        # 主组件
│   │   │   ├── ColumnSet.vue    # 列设置组件
│   │   │   ├── GyTableColumn.vue # 表格列组件
│   │   │   ├── operator.vue     # 操作列组件
│   │   │   ├── renderCol.vue    # 列渲染组件
│   │   │   ├── renderHeader.vue # 表头渲染组件
│   │   │   ├── singleEdit.vue   # 单行编辑组件
│   │   │   ├── singleEditCell.vue # 单元格编辑组件
│   │   │   ├── tableProps.ts    # 表格属性类型定义
│   │   │   ├── useExpose.ts     # 组件暴露方法
│   │   │   └── useVirtualized.ts # 虚拟滚动逻辑
│   │   ├── style/
│   │   │   ├── index.ts         # 样式导出
│   │   │   └── table.scss       # 表格样式
│   │   └── index.ts             # 组件导出
│   └── layout-page/             # 布局页面组件
│       ├── src/
│       │   └── index.vue        # 组件实现
│       ├── style/
│       │   ├── index.ts         # 样式导出
│       │   └── layout-page.scss # 布局样式
│       └── index.ts             # 组件导出
├── typings/                     # 全局类型定义
│   ├── env.d.ts                 # 环境变量类型
│   └── index.d.ts               # 主类型定义
├── public/                      # 静态资源目录
├── .editorconfig                # 编辑器配置
├── .gitattributes               # Git 属性配置
├── .gitignore                   # Git 忽略文件
├── .prettierignore              # Prettier 忽略文件
├── .prettierrc.json             # Prettier 配置
├── deploy.yml                   # 部署配置文件
├── eslint.config.ts             # ESLint 配置
├── index.html                   # HTML 入口文件
├── package.json                 # 项目配置和依赖
├── README.md                    # 项目说明文档
├── tsconfig.app.json            # 应用 TypeScript 配置
├── tsconfig.json                # 主 TypeScript 配置
├── tsconfig.node.json           # Node.js TypeScript 配置
└── vite.config.ts               # Vite 构建配置
```

## 技术栈

- **框架**: Vue 3
- **UI 基础**: Element Plus
- **构建工具**: Vite
- **语言**: TypeScript
- **样式**: SCSS
- **代码规范**: ESLint + Prettier + Oxlint

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 联系方式

- GitHub Issues: https://github.com/SKYE-iiii/gy-ui-plus/issues

---

感谢使用 gy-ui-plus！
