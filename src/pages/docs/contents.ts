import type { CardListData } from '@/types'

// Docs content declaration
export const docs: CardListData = {
  title: 'Docs content',
  list: [
    { title: 'Getting Started', link: '/docs/getting-started' },
    { title: 'Configuration', link: '/docs/configuration' },
    { title: 'Deployment', link: '/docs/deployment' },
    { title: 'Update Theme', link: '/docs/update' },
    {
      title: 'Integrations',
      children: [
        { title: 'Comment System', link: '/docs/integrations/comment' },
        { title: 'User Components', link: '/docs/integrations/components' },
        { title: 'Advanced Components', link: '/docs/integrations/advanced-components' }
      ]
    }
  ]
}
