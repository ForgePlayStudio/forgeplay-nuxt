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
        cover_image: z.string().optional(),
        release_date: z.date().optional(),
        genre: z.string().optional(),
        age_rating: z.string().optional(),
        engine: z.string().optional(),
        budget: z.string().optional(),
        platforms: z.array(z.string()).default([]),
        user_rating: z.number().optional(),
      })
    }),
    stats: defineCollection({
      type: 'data',
      source: 'stats/*.yml',
      schema: z.object({
        groups: z.array(z.string()).default([]),
        value: z.number(),
        unit: z.string().optional(),
        label: z.string().optional()
        
      })
    }),
    person: defineCollection({
      type: 'data',
      source: 'person/*.yml',
      schema: z.object({
        name: z.string(),
        role: z.string(),
        image: z.string().optional(),
        skills: z.array(z.string()).default([]),
        weapons: z.array(z.string()).default([]),
        social: z.object({
          twitter: z.string().optional(),
          linkedin: z.string().optional(),
          github: z.string().optional()
        }).optional()
        
      })
    })
    
  }
})