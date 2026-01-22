# Monorepo 架构说明

本项目已转换为 monorepo 架构，使用 pnpm workspace 进行管理。

## 项目结构

```
gy-ui-plus/
├── packages/
│   ├── core/              # 核心工具包（withInstall 等）
│   ├── button/            # Button 组件包
│   ├── table/             # Table 组件包
│   ├── layout-page/       # LayoutPage 组件包
│   ├── gy-ui-plus/        # 主构建包（用于构建发布版本）
│   └── index.ts           # 主入口文件
├── docs/                  # 文档站点
└── dist/                  # 构建输出目录
```

## 包说明

### @gy-ui-plus/core
核心工具包，包含 `withInstall` 等通用工具函数。

### @gy-ui-plus/button
Button 组件包。

### @gy-ui-plus/table
Table 组件包。

### @gy-ui-plus/layout-page
LayoutPage 组件包。

### gy-ui-plus
主构建包，用于构建和发布整个组件库。

### @gy-ui-plus/docs
文档站点，使用 VitePress 构建。

## 常用命令

### 安装依赖
```bash
pnpm install
```

### 构建组件库
```bash
pnpm build
# 或
pnpm lib
```

### 开发文档
```bash
pnpm docs:dev
# 或
pnpm dev
```

### 构建文档
```bash
pnpm docs:build
```

### 预览文档
```bash
pnpm docs:preview
```

### 类型检查
```bash
pnpm type-check
```

### 代码检查
```bash
pnpm lint
```

### 代码格式化
```bash
pnpm format
```

## 工作空间依赖

在 monorepo 中，包之间使用 `workspace:*` 协议来引用本地包：

```json
{
  "dependencies": {
    "@gy-ui-plus/core": "workspace:*"
  }
}
```

## 注意事项

1. 必须使用 pnpm 作为包管理器（已通过 `preinstall` 脚本强制）
2. 所有包都通过 workspace 协议相互引用
3. 构建输出在根目录的 `dist` 文件夹
4. 每个包都有独立的 `package.json`，但共享根目录的依赖
