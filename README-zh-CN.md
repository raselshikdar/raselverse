# Astro Theme Pure

[English](./README.md) | [简体中文](./README-zh-CN.md)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/cworld1/astro-theme-pure?label=commits&style=flat-square)](https://github.com/cworld1/astro-theme-pure/commits)
[![GitHub stars](https://img.shields.io/github/stars/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/stargazers)
[![vercel status](https://img.shields.io/website?down_message=offline&label=vercel&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fastro-pure.js.org)](#)
[![GitHub license](https://img.shields.io/github/license/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE)

一个由 Astro 构建的轻便简洁、快速强大的博客主题。

> [!CAUTION]
> 🚧🚧🚧 我们目前正在做有关升级到 Astro v5 和使用 NPM 包方法的工作 🚧🚧🚧
>
> 新版本的已知问题：
>
> 1. 无法在Vercel上使用Node v22（[等待新版本](https://github.com/withastro/adapters/issues/471)）
> 2. 无法在Vercel上打包站点地图和页面查找资源（[等待修复](https://github.com/withastro/astro/issues/12663)）
>
> 如果你想有一个稳定的体验，请使用 [v3.1.4](https://github.com/cworld1/astro-theme-pure/tree/v3.1.4)，直到新版本对普通用户来说足够稳定，我们才会发布新版本。欢迎对未发布的新代码提供任何反馈。
>
> （除非你只是来帮忙做测试，请不要在任何生产环境中使用非稳定版本！）

![image](./.github/assets/header.webp)
![image](./.github/assets/body.webp)

## 简介

查看 [预览 →](https://astro-pure.js.org/)

## :fire: 特性

- [x] :rocket: 快速高性能
- [x] :star: 简单干净的设计
- [x] :iphone: 响应式设计
- [x] :mag: 使用 [pagefind](https://pagefind.app/) 构建的全站搜索
- [x] :world_map: 站点地图和 RSS 订阅
- [x] :spider_web: 友好的 SEO
- [x] :book: 目录（table of contents）
- [x] :framed_picture: 动态为文章生成可供三方媒体预览的分享图像
- [x] :framed_picture: Mediumzoom 图像灯箱

## :package: 组件

主题包含了许多组件，不仅可以在主题中使用，还可以在其他 Astro 项目中使用。

> 对于其他 Astro 项目，需要 Tailwind CSS。

- 基础组件：`Aside`、`Tabs`、`Timeline`、`Steps`、`Spoiler`...
- 高级组件：`GithubCard`、`LinkPreview`、`Quote`、`QRCode`...

## :white_check_mark: Lighthouse 分数

[![lighthouse-score](./.github/assets/lighthouse-score.png)](https://pagespeed.web.dev/analysis/https-cworld-top/o229zrt5o4?form_factor=mobile&hl=en)

## 文档

[文档](https://astro-pure.js.org/docs/list) | [展示台](https://github.com/cworld1/astro-theme-pure/issues/10)

## 本地开发

环境要求：

- [Nodejs](https://nodejs.org/): 18.0.0+

克隆存储库：

```shell
git clone https://github.com/cworld1/astro-theme-pure.git
cd astro-theme-pure
```

有用的命令：

```shell
# install dependencies
bun install

# start the dev server
bun dev

# build the project
bun run build

# preview (after the build)
bun preview

# create a new post
bun new-post
```

## 贡献

为了花更多时间编写代码，减少在空白上纠结的时间，本项目使用代码约定和样式来鼓励一致性。风格一致的代码更容易（且更不容易出错）进行审查、维护和理解。

## 鸣谢

- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [Astro Resume](https://github.com/srleom/astro-theme-resume)
- [Starlight](https://github.com/withastro/starlight)

## 许可证

本项目基于 Apache 2.0 许可证。

[![Star History Chart](https://api.star-history.com/svg?repos=cworld1/astro-theme-pure&type=Date)](https://star-history.com/#cworld1/astro-theme-pure&Date)
