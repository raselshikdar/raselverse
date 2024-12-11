# Astro Theme Pure

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/cworld1/astro-theme-pure?label=commits&style=flat-square)](https://github.com/cworld1/astro-theme-pure/commits)
[![GitHub stars](https://img.shields.io/github/stars/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/stargazers)
[![vercel status](https://img.shields.io/website?down_message=offline&label=vercel&logo=vercel&style=flat-square&up_message=online&url=https%3A%2F%2Fastro-pure.js.org)](#)
[![GitHub license](https://img.shields.io/github/license/cworld1/astro-theme-pure?style=flat-square)](https://github.com/cworld1/astro-theme-pure/blob/main/LICENSE)

A simple, fast and powerful blog theme built by Astro.

![img](https://github.com/user-attachments/assets/6c42b061-df7e-4696-a29b-bff07fe17d88)

## Usage

### Use with theme template

See [Getting Started](https://astro-pure.js.org/docs/setup/getting-started).

### Use with common Astro project

Set up tailwindcss in your project.

```js
// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Add astro-pure components in the tailwindcss render config
    './node_modules/astro-pure/components/**/*.astro'
  ]
}

export default config
```

See [User Components](https://astro-pure.js.org/docs/integrations/components) & [Advanced Components](https://astro-pure.js.org/docs/integrations/advanced) to learn how to use.

> Some part of Advanced Components may require Astro Integration config.

## Cli

```shell
# See all commands
astro-pure help
# Get the info of astro-pure
astro-pure info
# Create a new post in the blog
astro-pure new [options]
```

## License

This project is licensed under the Apache 2.0 License.
