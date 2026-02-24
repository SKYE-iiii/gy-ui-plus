# GitHub Pages 部署问题排查

## 常见错误及解决方案

### 1. Install dependencies 失败

**错误现象：**
- GitHub Actions 中 `Install dependencies` 步骤显示红色 X
- 构建作业失败，后续步骤未执行

**可能原因：**

#### A. pnpm-lock.yaml 不同步

如果本地修改了 `package.json` 但没有提交 `pnpm-lock.yaml`，会导致 CI 安装失败。

**解决方案：**
```bash
# 在本地执行，确保 lockfile 是最新的
pnpm install

# 提交 lockfile
git add pnpm-lock.yaml
git commit -m "chore: update pnpm-lock.yaml"
git push
```

#### B. preinstall 脚本问题

`preinstall` 脚本 `npx only-allow pnpm` 可能在某些情况下失败。

**解决方案：**
- 确保使用 pnpm 安装（CI 中已配置）
- 如果持续失败，可以临时移除 `preinstall` 脚本（不推荐）

#### C. 依赖版本冲突

某些依赖版本可能与 Node.js 版本不兼容。

**解决方案：**
- 检查 `package.json` 中的 `engines` 字段
- 确保 CI 使用的 Node.js 版本符合要求（当前为 Node 20）

#### D. 网络问题

GitHub Actions 在某些地区可能访问 npm registry 较慢。

**解决方案：**
- 已添加 pnpm store 缓存配置
- 如果仍然失败，可以尝试添加重试机制

### 2. Build docs 失败

**错误现象：**
- `Install dependencies` 成功，但 `Build docs` 失败

**可能原因：**

#### A. workspace 依赖未正确链接

`docs` 包依赖 `gy-ui-plus: workspace:*`，如果 workspace 链接失败会导致构建失败。

**解决方案：**
- 确保 `pnpm-workspace.yaml` 配置正确
- 确保所有 workspace 包的 `package.json` 存在

#### B. TypeScript 类型错误

构建时可能遇到类型错误。

**解决方案：**
```bash
# 本地先检查类型
pnpm type-check

# 修复类型错误后再提交
```

#### C. 内存不足

大型项目构建可能需要更多内存。

**解决方案：**
- 已添加 `NODE_OPTIONS: '--max-old-space-size=4096'`
- 如果仍然失败，可以增加到 8192

### 3. 部署后导航栏丢失

**错误现象：**
- 部署成功，但访问网站时导航栏不显示

**解决方案：**
- 检查 `docs/.vitepress/config.ts` 中的 `base` 配置
- 确保导航链接格式正确（不包含 `.md` 扩展名）
- 参考 `docs/TROUBLESHOOTING.md`

## 工作流优化

已优化的配置：

1. ✅ **pnpm store 缓存**：加速依赖安装
2. ✅ **内存限制**：防止构建时内存不足
3. ✅ **错误处理**：更清晰的错误信息

## 调试步骤

如果部署持续失败：

1. **查看 GitHub Actions 日志**
   - 点击失败的作业
   - 查看 `Install dependencies` 步骤的详细输出
   - 查找红色错误信息

2. **本地复现问题**
   ```bash
   # 清理本地环境
   rm -rf node_modules
   rm -rf .pnpm-store
   
   # 重新安装
   pnpm install --frozen-lockfile
   
   # 尝试构建
   pnpm docs:build
   ```

3. **检查 lockfile**
   ```bash
   # 确保 lockfile 是最新的
   pnpm install
   git diff pnpm-lock.yaml
   ```

4. **验证配置**
   - 检查 `.github/workflows/deploy-docs.yml`
   - 检查 `package.json` 中的 `engines` 字段
   - 检查 `pnpm-workspace.yaml` 配置

## 联系支持

如果问题仍然存在，请提供：
1. GitHub Actions 的完整错误日志
2. 本地构建的输出（`pnpm docs:build`）
3. `package.json` 和 `pnpm-lock.yaml` 的相关部分
