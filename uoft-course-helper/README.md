# UOFT Course Helper - Frontend

Vite + React 前端项目骨架。后端采用 FastAPI（独立仓库）。

## 本地开发

1. 复制环境变量模板：
   - `cp .env.example .env`
2. 安装依赖并启动：
   - `npm install`
   - `npm run dev`

## 构建

```
npm run build
npm run preview
```

## 部署（占位）

前端托管建议：S3 + CloudFront。

高层步骤占位：
1. 构建产物：`npm run build`
2. 同步 `dist/` 到 S3
3. CloudFront 指向该 S3 bucket
4. 配置自定义域名与 HTTPS（ACM）

## 约定环境变量

- `VITE_API_BASE_URL`：后端 API 基地址
- `VITE_TURNSTILE_SITE_KEY`：Cloudflare Turnstile 站点公钥
