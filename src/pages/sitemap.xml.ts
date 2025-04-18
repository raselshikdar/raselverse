// src/pages/sitemap.xml.ts
import type { AstroGlobal } from 'astro'
import { getBlogCollection } from 'astro-pure/server'
import config from 'virtual:config'

// Type for static page configuration
interface StaticPage {
  url: string
  lastmod?: Date
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

const GET = async ({ site }: AstroGlobal) => {
  const baseUrl = site?.origin || import.meta.env.SITE
  const allPosts = await getBlogCollection()
  const now = new Date().toISOString()

  // Configure static pages with SEO parameters
  const staticPages: StaticPage[] = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
      lastmod: new Date()
    },
    {
      url: '/blog/',
      changefreq: 'daily',
      priority: 0.9,
      lastmod: allPosts[0]?.data.publishDate || new Date()
    },
    {
      url: '/about/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date('2023-01-01') // Set to your actual last modified date
    },
    {
      url: '/projects/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/links/',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    },
    {
      url: '/docs/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    }
  ]

  // Generate blog post URLs with SEO optimization
  const blogUrls = allPosts.map(post => ({
    url: `/blog/${post.id}/`,
    lastmod: post.data.updateDate || post.data.publishDate,
    changefreq: 'weekly',
    priority: 0.8
  }))

  // Combine all URLs and sort by priority
  const allUrls = [...staticPages, ...blogUrls].sort((a, b) => 
    (b.priority || 0.5) - (a.priority || 0.5)
  )

  // Generate XML content
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${allUrls.map(entry => `
        <url>
          <loc>${baseUrl}${entry.url}</loc>
          <lastmod>${(entry.lastmod || new Date()).toISOString()}</lastmod>
          <changefreq>${entry.changefreq || 'weekly'}</changefreq>
          <priority>${entry.priority || 0.5}</priority>
          ${entry.url.startsWith('/blog/') ? `
          <image:image>
            <image:loc>${typeof entry.data.heroImage?.src === 'string' 
              ? entry.data.heroImage.src 
              : entry.data.heroImage?.src.src}</image:loc>
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
