# Astro Theme Pure

[English](./README.md) | [简体中文](./README-zh-CN.md)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/cworld1/astro-theme-pure?label=commits&style=flat-square)](https://github.com/cworld1/astro-theme-pure/commits)
[![GitHub stars](https://img.shields.io/github/stars/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/stargazers)
[![vercel status](https://img.shields.io/website?down_message=offline&label=vercel&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fastro-pure.js.org)](#)
[![GitHub license](https://img.shields.io/github/license/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE)

A simple, fast and powerful blog theme built by Astro.

> [!CAUTION]
> 🚧🚧🚧 We are currently on develop about upgrading to Astro v5 and developing npm package method 🚧🚧🚧
>
> Known issues for new version:
>
> 1. Cannot use Node v22 on Vercel ([waiting for new release](https://github.com/withastro/adapters/issues/471))
> 2. Cannot pack sitemap and pagefind resources on Vercel ([waiting for fixing](https://github.com/withastro/astro/issues/12663))
>
> If you want to have a stable experience, try [v3.1.4](https://github.com/cworld1/astro-theme-pure/tree/v3.1.4) instead. We'll release new version if the it is enough stable for users. And any feedback of newly unreleased code is also welcome.
>
> （除非你只是来帮忙做测试，请不要在任何生产环境中使用非稳定版本！）

![image](./.github/assets/header.webp)
![image](./.github/assets/body.webp)

## Introduction

Checkout [Demo Site →](https://astro-pure.js.org/)

### :fire: Features

- [x] :rocket: Fast & high performance
- [x] :star: Simple & clean design
- [x] :iphone: Responsive design
- [x] :mag: Full-site search built with [pagefind](https://pagefind.app/)
- [x] :world_map: Sitemap & RSS feed
- [x] :spider_web: SEO-friendly
- [x] :book: TOC (table of contents)
- [x] :framed_picture: Dynamic open graph generation for posts
- [x] :framed_picture: Mediumzoom lightbox for images

### :package: Components

Theme includes a lot of components, which can not only be used in the theme, but also in other astro projects.

> For other astro projects, Tailwind CSS is required.

- Basic components: `Aside`, `Tabs`, `Timeline`, `Steps`, `Spoiler`...
- Advanced components: `GithubCard`, `LinkPreview`, `Quote`, `QRCode`...

### :white_check_mark: Lighthouse score

[![lighthouse-score](./.github/assets/lighthouse-score.png)](https://pagespeed.web.dev/analysis/https-cworld-top/o229zrt5o4?form_factor=mobile&hl=en)

## Documentation

[Docs](https://astro-pure.js.org/docs/list) | [Showcase](https://github.com/cworld1/astro-theme-pure/issues/10)

## Package

See [astro-theme-pure](https://www.npmjs.com/package/astro-pure) on npm.

## Local development

Environment requirements:

- [Nodejs](https://nodejs.org/): 18.0.0+

Clone the repository:

```shell
git clone https://github.com/cworld1/astro-theme-pure.git
cd astro-theme-pure
```

Useful commands:

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

## Contributions

To spend more time coding and less time fiddling with whitespace, this project uses code conventions and styles to encourage consistency. Code with a consistent style is easier (and less error-prone!) to review, maintain, and understand.

## Thanks

- [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus)
- [Astro Resume](https://github.com/srleom/astro-theme-resume)
- [Starlight](https://github.com/withastro/starlight)

## License

This project is licensed under the Apache 2.0 License.

[![Star History Chart](https://api.star-history.com/svg?repos=cworld1/astro-theme-pure&type=Date)](https://star-history.com/#cworld1/astro-theme-pure&Date)
