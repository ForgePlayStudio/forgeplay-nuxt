// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  image: {
    format: ['avif', 'webp'],
    alias: {
      games: '/images/games',
      team: '/images/team',
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
 fonts: {
    defaults: {
      weights: ['400 700'],
      styles: ['normal'],
      subsets: [
        'latin-ext',
        'latin',
      ]
    },
  },
  modules: [
   '@nuxt/content',
   '@nuxt/eslint',
   '@nuxt/fonts',
   '@nuxt/image',
   'motion-v/nuxt',
   'shadcn-nuxt',
   'nuxt-seo-utils',
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/components.css',
    '@/assets/css/typography.css',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'ForgePlay Studio',
      meta: [
        { name: 'description', content: '' },
        { property: 'og:title', content: 'ForgePlay Studio' },
        { property: 'og:description', content: '' },
        { property: 'og:image', content: '' },
        { name: 'theme-color', content: '#040404' },
        { name: 'msapplication-TileColor', content: '#ffcc00' }
      ],
      link: [
        // Basic favicon
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // Standard sizes
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        
        
        // Apple devices
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        
        // Android devices  
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
        
        // Web App Manifest
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  site: {
    url: 'https://forgeplay.studio/',
    name: 'ForgePlay Studio'
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'sc',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  },
})