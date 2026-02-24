# GitHub Pages 导航栏丢失问题排查指南

## 已修复的问题

✅ **导航链接格式问题**：已将 `/components/gy-button.md` 改为 `/components/gy-button`（VitePress 导航链接不应包含 `.md` 扩展名）

## 排查步骤

### 1. 检查浏览器控制台错误

打开 https://skye-iiii.github.io/gy-ui-plus/ 后：

1. 按 `F12` 打开开发者工具
2. 查看 **Console** 标签是否有红色错误
3. 查看 **Network** 标签，检查是否有资源（CSS/JS）返回 404

**常见错误：**
- `Failed to load resource: the server responded with a status of 404` → 资源路径问题
- `Uncaught TypeError` → JavaScript 执行错误
- `Cannot read property 'xxx' of undefined` → 组件初始化失败

### 2. 检查构建产物

在本地执行：

```bash
pnpm docs:build
```

然后检查 `docs/.vitepress/dist/index.html`：

- 打开该文件，查看 `<head>` 中的 CSS/JS 引用路径
- 路径应该是 `/gy-ui-plus/assets/...` 而不是 `/assets/...`
- 如果路径不正确，说明 base 配置没有生效

### 3. 清除 GitHub Pages 缓存

GitHub Pages 可能会缓存旧版本：

1. 在仓库的 **Settings → Pages** 中
2. 临时切换到其他 Source，保存
3. 再切换回 **GitHub Actions**，保存
4. 等待几分钟后重新访问

### 4. 确认部署配置

检查 `.github/workflows/deploy-docs.yml`：

- ✅ 构建命令：`pnpm docs:build`
- ✅ 上传路径：`docs/.vitepress/dist`
- ✅ 使用 GitHub Actions 部署（不是 gh-pages 分支）

### 5. 验证 base 路径配置

确认 `docs/.vitepress/config.ts` 中：

```typescript
export default defineConfig({
  base: '/gy-ui-plus/',  // ✅ 必须以斜杠开头和结尾
  // ...
})
```

**重要：**
- base 必须以 `/` 开头和结尾
- 如果仓库名是 `gy-ui-plus`，base 必须是 `/gy-ui-plus/`
- 如果将来改为自定义域名，base 应改为 `/`

### 6. 检查自定义主题

如果使用了自定义 `Layout.vue`，确保：

- 正确扩展了 `DefaultTheme.Layout`
- 没有覆盖导航栏相关的组件
- 检查 `docs/.vitepress/theme/components/layout.vue`

### 7. 重新部署

修复后，重新触发部署：

```bash
# 提交更改
git add .
git commit -m "fix: 修复导航栏链接格式"
git push origin master
```

然后：
1. 等待 GitHub Actions 完成构建和部署（约 2-5 分钟）
2. 访问 https://skye-iiii.github.io/gy-ui-plus/
3. 硬刷新页面（Ctrl+Shift+R 或 Cmd+Shift+R）

## 如果问题仍然存在

### 方案 A：检查 VitePress 版本

某些旧版本可能有 base 路径的 bug：

```bash
cd docs
pnpm list vitepress
```

如果版本较旧，考虑升级：

```bash
pnpm add -D vitepress@latest
```

### 方案 B：添加调试信息

在 `docs/.vitepress/config.ts` 中添加：

```typescript
export default defineConfig({
  base: '/gy-ui-plus/',
  // ... 其他配置
  // 添加这个来调试
  head: [
    ['script', {}, `console.log('Base path:', '${base}')`]
  ],
})
```

### 方案 C：检查 GitHub Pages 设置

1. 访问仓库的 **Settings → Pages**
2. 确认 **Source** 是 **GitHub Actions**（不是 `gh-pages` 分支）
3. 确认 **Custom domain** 为空（如果设置了自定义域名，base 需要改为 `/`）

## 常见原因总结

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 导航栏完全不显示 | CSS/JS 加载失败 | 检查 base 路径配置，查看 Network 面板 |
| 导航栏显示但链接错误 | 导航链接格式错误 | 移除 `.md` 扩展名，使用 `/` 开头的路径 |
| 本地正常，线上异常 | base 路径不一致 | 确保 base 配置正确，重新构建部署 |
| 部分页面导航栏正常 | 路由配置问题 | 检查 sidebar 和 nav 配置的一致性 |

## 参考链接

- [VitePress 部署指南](https://vitepress.dev/guide/deploy)
- [VitePress Base 配置](https://vitepress.dev/reference/site-config#base)
- [VitePress 导航配置](https://vitepress.dev/reference/default-theme-nav)
