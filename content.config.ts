import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        class: z.string().default('prose')
      })
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
        show_full_release_date: z.boolean().default(false),
        genre: z.string().optional(),
        age_rating: z.string().optional(),
        engine: z.string().optional(),
        budget: z.string().optional(),
        platforms: z.array(z.object({
          platform_id: z.string(),
          url: z.string().optional(),
          platform_name: z.string()
        })).default([]),
        user_rating: z.number().optional(),
        carousel: z.object({
          slides: z.array(z.object({
            url: z.string(),
            type: z.enum(['image', 'video']).default('image'),
            alt: z.string().optional()
          })).default([]),
          options: z.object({
            axis: z.enum(['x', 'y']).default('x'),
          }).optional(),
        }).optional()
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
        social: z.array(z.object({
          platform_id: z.string(),
          url: z.string().optional(),
          platform_name: z.string()
        })).default([])

      })
    })
    
  }
})