import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    games: defineCollection({
      type: 'page',
      source: 'games/*.md',
      schema: z.object({
        hero_image: z.string(),
        hero_bg: z.string(),
        icon: z.string(),
        name: z.string(),
        game_id: z.string(),
      })
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats/*.yml',
      schema: z.object({
        groups: z.array(z.string()).default([]),
        value: z.number(),
        unit: z.string().optional(),
        label: z.string().optional(),
      })
    })
    
  }
})