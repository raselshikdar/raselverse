import { getBlogCollection, sortMDByDate } from 'astro-pure/server'
import defineSitemap from '@astrojs/sitemap'
import type { SitemapItem } from '@astrojs/sitemap'

export const GET = async () => {
  const allPostsByDate = sortMDByDate(await getBlogCollection())

  // Blog posts
  const blogUrls: SitemapItem[] = allPostsByDate.map((post) => ({
    url: `/blog/${post.id}/`,
    lastmod: (post.data.updatedDate || post.data.publishDate)?.toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }))

  // Static pages
  const staticUrls: SitemapItem[] = [
    '/',
    '/about/',
    '/projects/',
    '/tags/',
  ].map((url) => ({
    url,
    changefreq: 'monthly',
    priority: 0.7,
  }))

  // Tags (extracted from posts)
  const tagSet = new Set<string>()
  allPostsByDate.forEach((post) => {
    post.data.tags?.forEach((tag: string) => tagSet.add(tag))
  })
  const tagUrls: SitemapItem[] = Array.from(tagSet).map((tag) => ({
    url: `/tags/${tag}/`,
    changefreq: 'weekly',
    priority: 0.6,
  }))

  return defineSitemap([...staticUrls, ...blogUrls, ...tagUrls])
}
