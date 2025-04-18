import { z } from 'astro/zod'

export const FriendLinksSchema = () =>
  z
    .object({
      logbook: z.array(
        z.object({
          date: z.string(),
          content: z.string()
        })
      ),
      applyTip: z.array(
        z.object({
          name: z.string(),
          val: z.string()
        })
      )
    })
    .default({
      logbook: [],
      applyTip: [
        { name: 'Name', val: 'Astro Pure' },
        { name: 'Desc', val: 'Null' },
        { name: 'Link', val: 'https://raselverse.vercel.app/' },
        { name: 'Avatar', val: 'https://raselverse.vercel.app/favicon/favicon.ico' }
      ]
    })
    .describe('Friend links for your website.')
