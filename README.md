# 知禾序 · Zhihexu

知禾序是一个持续生长的独立产品空间。我们从真实需求出发，构建 AI 工具与学习产品，让技术成为日常可用的帮助。

## 本地预览

需要 Node.js 18 或以上，无需安装依赖。

```sh
npm start
```

打开 http://127.0.0.1:3000。可通过 PORT 环境变量修改端口。

```sh
npm run check
```

## 页面与维护

- `index.html`：首页内容及产品链接。
- `styles.css`：响应式布局、配色与移动端样式。
- `script.js`：版权年份与产品点击事件扩展点。
- `favicon.svg`：品牌图标。
- `robots.txt`、`sitemap.xml`：搜索引擎配置。
- `server.cjs`：本地预览服务器，仅开放页面所需文件。

产品入口：
- ModelHub：https://modelhub.zhihexu.cn/
- KnowLadder：https://knowladder.zhihexu.cn/

页面中的产品图为功能概念示意。后续可替换为真实截图；上线前请核对产品介绍与实际功能一致。暂未提供联系方式，因此不生成虚构邮箱；已获备案信息时，在页脚补充真实备案号与对应官方链接。

## 部署

这是纯静态网站，不需要构建。将以下文件部署到 zhihexu.cn 对应站点根目录，配置域名与 HTTPS：

`index.html`、`styles.css`、`script.js`、`favicon.svg`、`robots.txt`、`sitemap.xml`。

不要将整个 Git 仓库作为公开目录。`npm start` 仅用于本地预览。

## 点击统计

默认不请求统计服务。接入自己的统计系统时监听 `window` 上的 `zhihexu:product-click` 事件，事件 `detail` 包含 `product` 与 `placement`。目前仅预留产品点击事件，未统计注册或项目内核心操作。
