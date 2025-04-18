// src/pages/sitemap.xml.ts
import type { APIContext } from 'astro'
import { getBlogCollection } from 'astro-pure/server'
import { escape } from 'html-escaper'

interface StaticPage {
  url: string
  lastmod: Date
  changefreq: 'daily' | 'weekly' | 'monthly'
  priority: number
  type: 'static'
}

interface BlogPage {
  url: string
  lastmod: Date
  changefreq: 'weekly'
  priority: 0.8
  type: 'blog'
  data: {
    heroImage?: {
      src: string | { src: string }
    }
  }
}

const validateDate = (date: unknown): Date => {
  return date instanceof Date ? date : new Date()
}

const GET = async ({ site }: APIContext) => {
  const baseUrl = site?.origin || import.meta.env.SITE
  const allPosts = await getBlogCollection()

  const staticPages: StaticPage[] = [
    {
      type: 'static',
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date()
    },
    {
      type: 'static',
      url: '/blog/',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: allPosts[0]?.data.publishDate instanceof Date 
        ? allPosts[0].data.publishDate 
        : new Date()
    },
    // ... other static pages
  ]

  const blogUrls: BlogPage[] = allPosts.map(post => {
    const slug = post.data.slug || post.id
    return {
      type: 'blog',
      url: `/blog/${encodeURIComponent(slug)}/`,
      lastmod: validateDate(post.data.updatedDate ?? post.data.publishDate),
      changefreq: 'weekly',
      priority: 0.8,
      data: post.data
    }
  })

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${allUrls.map(entry => `
      <url>
        <loc>${escape(`${baseUrl}${entry.url}`)}</loc>
        <lastmod>${entry.lastmod.toISOString()}</lastmod>
        <changefreq>${entry.changefreq}</changefreq>
        <priority>${entry.priority.toFixed(1)}</priority>
        ${entry.type === 'blog' && entry.data.heroImage ? `
        <image:image>
          <image:loc>${
            entry.data.heroImage.src 
              ? escape(
                  typeof entry.data.heroImage.src === 'string'
                    ? new URL(entry.data.heroImage.src, baseUrl).href
                    : new URL(entry.data.heroImage.src?.src || '', baseUrl).href
                )
              : ''
          }</image:loc>
        </image:image>
        ` : ''}
      </url>
    `).join('')}
  </urlset>`

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600'
    }
  })
}

export { GET }
