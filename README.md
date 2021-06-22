## 项目说明

umi-antd 采用 umi + antd 构建，适用于 SAP 中后台项目。

## 项目构建

1.运行：

```
    npm install # 初次运行之前安装依赖
    npm start # 本地启动
```

2.打包：

```
    npm run build
```

## 项目结构

```
├── README.md
├── dist 打包文件夹
├── mock 数据 mock 目录
├── package-lock.json
├── package.json
├── src 源码目录
│   ├── api api
│   ├── app.js
│   ├── assets 静态资源
│   │   └── images
│   ├── components 通用功能组件
│   │   ├── Auth 权限组件
│   │   ├── Message 预留公共弹窗等组件二次封装
│   │   └── ModCard 预留选项卡组件二次封装
│   ├── constants 静态数据目录
│   │   ├── enums.js 静态数据-枚举
│   │   ├── icons.js 静态数据-icon 统一外抛入口
│   │   ├── index.js
│   │   └── reg.js 静态数据-正则统一管理文件
│   ├── global.less 公共样式
│   ├── layouts 页面布局 layout
│   │   ├── Breadcrumbs.js
│   │   ├── Sidebar.js
│   │   ├── index.js
│   │   └── index.less
│   ├── models 应用公共数据 model
│   │   └── app.js
│   ├── pages 具体页面
│   │   ├── 404.js
│   │   ├── Index
│   │   └── document.ejs 页面渲染入口 ejs 模板
│   ├── routes 路由
│   │   ├── app.js
│   │   └── index.js
│   ├── settings.js 应用所有配置性数据配置文件
│   └── utils
│   ├── index.js
│   └── request.js 数据请求库二次封装
├── tree.md
├── tsconfig.json
├── typings.d.ts
└── yarn.lock
```
