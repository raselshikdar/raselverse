import type { AstroGlobal } from 'astro'
import { getBlogCollection, sortMDByDate } from 'astro-pure/server'
import { getCollection } from 'astro:content'

const GET = async (context: AstroGlobal) => {
  const site = context.site ?? new URL(import.meta.env.SITE)

  // Static pages
  const staticPages = [
    '/',
    '/blog',
    '/about',
    '/projects',
    '/links',
    '/docs'
  ]

  // Blog posts
  const blogPosts = sortMDByDate(await getBlogCollection())

  // Docs pages (assuming you have a content collection named 'docs')
  const docsPages = await getCollection('docs')

  const staticUrls = staticPages.map((page) => `
    <url>
      <loc>${site.origin}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `)

  const blogUrls = blogPosts.map((post) => `
    <url>
      <loc>${site.origin}/blog/${post.id}</loc>
      <lastmod>${new Date(post.data.publishDate).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `)

  const docsUrls = docsPages.map((doc) => `
    <url>
      <loc>${site.origin}/docs/${doc.id}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>
  `)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticUrls, ...blogUrls, ...docsUrls].join('')}
    </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

export { GET }
