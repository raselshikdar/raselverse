import type { SiteConfig, FooterConfig, IntegrationConfig, MenuLinks, CardListData } from '@/types'

export const siteConfig: SiteConfig = {
  // === Required meta properties ===
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'CWorld / Arthals',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'Astro Theme Pure',
  // Meta property used to generate your sitemap and canonical URLs in your final build
  site: 'https://astro-theme-pure.vercel.app',
  // Meta property used as the default description meta property
  description: 'Stay hungry, stay foolish',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'zh-CN, en-US',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_US',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-US',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },

  // Mirror (remove ending trailing slash)
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  // Recommend:
  // - https://cdn.jsdelivr.net/npm
  // - https://cdn.smartcis.cn/npm
  // - https://unkpg.com
  // - https://cdn.cbd.int

  // === Customize options ===
  blog: {
    pageSize: 8 // blog page size for pagination
  },

  links: {
    // Link info
    applyTip: {
      name: 'Astro Theme Pure',
      desc: '求知若愚，虚怀若谷',
      url: 'https://astro-theme-pure.vercel.app/',
      avatar: 'https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200'
    }
  },

  seo: {
    // Telegram channel (Only to link with telegram instant view.
    // If you don't know what it is, you can ignore it)
    // telegramChannel: '@cworld0_cn'
  },
  content: {
    externalLinkArrow: true, // show external link arrow
    // https://github.com/tailwindlabs/tailwindcss-typography
    typographyProse: 'prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium'
  }
}

// Footer configuration, which contains the registration and social links
// and will be used in Footer.astro
export const footerConfig: FooterConfig = {
  // Registration information for ICP (optional)
  registration: {
    url: 'https://icp.gov.moe/?keyword=APTX4869',
    text: '萌ICP备APTX4869号'
  },
  socialLinks: [
    // {
    //   name: 'mail',
    //   url: 'mailto:test@example.com'
    // },
    {
      name: 'github',
      url: 'https://github.com/cworld1/astro-theme-pure'
    }
  ]
}

export const integrationConfig: IntegrationConfig = {
  waline: {
    // Comment system service link (no link to disable)
    server: 'https://astro-theme-pure-waline.arthals.ink/',
    // Refer https://waline.js.org/en/guide/features/emoji.html
    emoji: ['bmoji', 'weibo'],
    // Refer https://waline.js.org/en/reference/client/props.html
    additionalConfigs: {
      // search: false,
      pageview: true,
      comment: true,
      locale: {
        reaction0: 'Like',
        placeholder: 'Welcome to comment. (Email to receive replies. Login is unnecessary)'
      },
      imageUploader: false
    }
  }
}

export const menuLinks: MenuLinks = [
  {
    link: '/blog',
    label: 'Blog'
  },
  // Docs menu
  {
    link: '/docs/list',
    label: 'Docs'
  },
  {
    link: '/projects',
    label: 'Projects'
  },
  {
    link: '/links',
    label: 'Links'
  },
  {
    link: '/about',
    label: 'About'
  }
]

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}
