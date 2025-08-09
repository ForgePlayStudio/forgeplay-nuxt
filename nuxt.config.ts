// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  image: {
    format: ['avif', 'webp'],
    alias: {
      games: '/images/games',
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
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/components.css',
    '@/assets/css/typography.css',
  ],
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