# 多页面作品集

一个使用 Next.js 14 构建的现代化、响应式作品集网站，包含多个页面，包括博客系统、项目展示和关于页面。

## 快速部署

[![部署到腾讯云](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?template=https://github.com/tomcomtang/minimalist-portfolio&output-directory=./out&build-command=npm%20run%20build&install-command=npm%20install)

## 预览

您可以在以下地址在线预览该项目：

[https://multiplepage-portfolio.edgeone.app/](https://multiplepage-portfolio.edgeone.app/)

## 功能特性

- 🎨 现代简洁的设计，支持深色/浅色模式
- 📱 完全响应式布局
- 📝 支持 Markdown 的博客系统
- 🚀 项目展示
- 🔍 博客文章搜索功能
- 🎯 SEO 优化
- 🌙 深色/浅色主题切换
- 📦 静态站点生成

## 技术栈

- **框架**：Next.js 14
- **样式**：Tailwind CSS
- **内容**：Markdown with React Markdown
- **语法高亮**：React Syntax Highlighter
- **主题**：next-themes
- **UI 组件**：自定义组件与 Radix UI 原语

## 快速开始

1. 克隆仓库：

```bash
git clone https://github.com/tomcomtang/multiplepage-portfolio.git
```

2. 安装依赖：

```bash
npm install
```

3. 运行开发服务器：

```bash
npm run dev
```

4. 构建生产版本：

```bash
npm run build
```

## 项目结构

```
├── src/
│   ├── app/                 # Next.js app 目录
│   │   ├── about/          # 关于页面
│   │   ├── posts/          # 博客文章
│   │   └── projects/       # 项目展示
│   ├── components/         # 可复用组件
│   └── config/            # 配置文件
├── scripts/               # 构建脚本
└── public/               # 静态资源
```

## 内容管理

### 博客文章

1. 在 `src/content/posts/` 目录中创建您的 markdown 文件
2. 每个 markdown 文件应遵循以下格式：

```markdown
---
title: 您的文章标题
description: 文章的简短描述
date: 2024-03-21
readTime: 5 分钟
---

您的文章内容在这里...
```

3. 添加或修改 markdown 文件后，运行：

```bash
npm run generate-posts
```

### 页面内容

您可以通过修改以下文件来自定义不同页面的内容：

- **关于页面**：`src/app/about/page.tsx`
- **项目页面**：`src/config/projects.ts`
- **博客文章**：`src/content/posts/*.md`

### 站点配置

主要配置文件包括：

- `src/config/content.ts`：主要内容配置，包括站点名称、描述和所有页面内容
- `src/config/global.ts`：全局设置，如导航、页脚和社交链接
- `src/config/contact.ts`：联系信息和社交媒体链接
- `src/config/home.ts`：首页特定配置
- `src/config/posts.ts`：博客文章配置和内容
- `src/config/projects.ts`：项目展示配置
- `src/config/about.ts`：关于页面配置

## 博客系统

博客系统支持：

- Markdown 内容
- 代码语法高亮
- 阅读时间估算
- 搜索功能
- 分页

## 自定义

1. 在 `src/content/posts` 目录中创建 Markdown 文件来添加新博客文章
2. 在 `src/config/projects.ts` 中更新项目信息
3. 在 `src/config/content.ts` 和 `src/config/global.ts` 中修改站点配置

## 许可证

ISC

## 作者

[您的名字]
