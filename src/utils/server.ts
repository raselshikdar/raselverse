import { getCollection, type CollectionEntry, type CollectionKey } from 'astro:content'

export const prod = import.meta.env.PROD

/** Note: this function filters out draft posts based on the environment */
export async function getBlogCollection(contentType: CollectionKey = 'blog') {
  return await getCollection(contentType, ({ data }: CollectionEntry<typeof contentType>) => {
    // Not in production & draft is not false
    return prod || data.draft !== false
  })
}
