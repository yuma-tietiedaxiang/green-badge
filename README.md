# Green Badge - 环保徽章系统

这是一个基于 React 的环保徽章系统，用于展示用户在垃圾分类方面的成就。

## 功能特性

- 🏆 徽章展示系统
- 📊 统计图表
- 🎨 3D 徽章模型展示
- 📱 响应式设计
- 🌱 环保主题

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Three.js (3D 渲染)
- Framer Motion (动画)
- React Query (数据管理)
- React Router (路由)

## 安装和运行

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 打开浏览器访问 `http://localhost:3000`

## 项目结构

```
src/
├── components/
│   ├── ui/           # 基础UI组件
│   ├── badges/       # 徽章相关组件
│   └── statistics/   # 统计相关组件
├── pages/            # 页面组件
├── api/              # API客户端
├── utils/            # 工具函数
└── entities/         # 数据模型
```

## 开发说明

- 项目使用模拟数据进行开发
- 所有徽章数据都是静态生成的
- 3D 模型功能需要实际的.glb 文件支持
- UI 组件基于 Radix UI 和自定义样式

## 构建

```bash
npm run build
```

## 预览

```bash
npm run preview
```
