// src/pages/sitemap.xml.ts

import type { AstroGlobal } from 'astro'
import { getBlogCollection, sortMDByDate } from 'astro-pure/server'

const GET = async (context: AstroGlobal) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection())
  const siteUrl = context.site ?? new URL(import.meta.env.SITE)

  const staticRoutes = ['/', '/blog']

  const urls = [
    ...staticRoutes.map((path) => {
      return `  <url>\n    <loc>${new URL(path, siteUrl).href}</loc>\n  </url>`
    }),
    ...allPostsByDate.map((post) => {
      const loc = new URL(`/blog/${post.id}`, siteUrl).href
      const lastmod = post.data.publishDate?.toISOString?.() ?? new Date().toISOString()
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    })
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join('\n') +
    `\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  })
}

export { GET }
