import { getBlogCollection, sortMDByDate } from 'astro-pure/server'
import { defineSitemap } from '@astrojs/sitemap'
import type { SitemapItem } from '@astrojs/sitemap'

export const GET = async () => {
  const allPostsByDate = sortMDByDate(await getBlogCollection())

  const blogUrls: SitemapItem[] = allPostsByDate.map((post) => ({
    url: `/blog/${post.id}/`,
    lastmod: post.data.updatedDate || post.data.publishDate,
    changefreq: 'weekly',
    priority: 0.8,
  }))

  return defineSitemap([
    {
      type: 'blog',
      urls: blogUrls,
    },
  ])
}
