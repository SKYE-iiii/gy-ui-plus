# GY-UI-Plus

一个基于 Vue 3 + TypeScript 开发的 UI 组件库

## 特性

- 基于 Vue 3 + TypeScript 开发，提供完整的类型定义
- 组件设计遵循现代 UI/UX 设计理念
- 支持按需引入，减小打包体积
- 丰富的组件功能和配置选项
- 基于 Element Plus 扩展，保持良好的兼容性

## 快速开始

### 安装

```bash
npm install gy-ui-plus
```

### 使用

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import GyUiPlus from 'gy-ui-plus'
import 'gy-ui-plus/dist/gy-ui-plus.css'

const app = createApp(App)
app.use(GyUiPlus)
app.mount('#app')
```

## 组件

<ClientOnly>
  <div class="demo-button">
    <gy-button>默认按钮</gy-button>
    <gy-button type="primary">主要按钮</gy-button>
  </div>
</ClientOnly>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
</style>
