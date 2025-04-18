// src/pages/sitemap.xml.ts
import type { AstroGlobal } from 'astro'
import { getBlogCollection } from 'astro-pure/server'

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

const GET = async ({ site }: AstroGlobal) => {
  const baseUrl = site?.origin || import.meta.env.SITE
  const allPosts = await getBlogCollection()

  // Static pages with guaranteed lastmod dates
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
      lastmod: allPosts[0]?.data.publishDate || new Date()
    },
    {
      type: 'static',
      url: '/about/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date('2023-01-01')
    },
    {
      type: 'static',
      url: '/projects/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      type: 'static',
      url: '/links/',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    },
    {
      type: 'static',
      url: '/docs/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    }
  ]

  // Blog posts with validated dates
  const blogUrls: BlogPage[] = allPosts.map(post => ({
    type: 'blog',
    url: `/blog/${post.id}/`,
    lastmod: post.data.updatedDate ?? post.data.publishDate,
    changefreq: 'weekly',
    priority: 0.8,
    data: post.data
  }))

  // Combine and sort URLs
  const allUrls = [...staticPages, ...blogUrls].sort((a, b) => 
    b.priority - a.priority
  )

  // Generate XML with type-safe access
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${allUrls.map(entry => `
        <url>
          <loc>${baseUrl}${entry.url}</loc>
          <lastmod>${entry.lastmod.toISOString()}</lastmod>
          <changefreq>${entry.changefreq}</changefreq>
          <priority>${entry.priority}</priority>
          ${entry.type === 'blog' && entry.data.heroImage ? `
          <image:image>
            <image:loc>${
              typeof entry.data.heroImage.src === 'string' 
                ? new URL(entry.data.heroImage.src, baseUrl).href
                : new URL(entry.data.heroImage.src.src, baseUrl).href
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
