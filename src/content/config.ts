import { defineCollection, z } from 'astro:content';

const paintingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'Figurative',
      'Women / The Girls',
      'Travel & Places',
      'Nature / Water',
      'Still Life & Everyday Moments',
      'New Work',
    ]),
    medium: z.string(),
    dimensions: z.string(),
    year: z.number().int(),
    status: z.enum(['Available', 'Sold', 'Reserved', 'Not for Sale']).default('Available'),
    price: z.object({
      displayPrice: z.string().optional(),
      hidePrice: z.boolean().default(false),
    }).optional(),
    image: z.string(),
    detailShots: z.array(z.string()).default([]),
    description: z.string().optional(),
    featuredOnHome: z.boolean().default(false),
    displayOrder: z.number().default(99),
  }),
});

const illustrationsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.enum([
      'PACKAGING',
      'WEDDING INVITES',
      'BABY ANNOUNCEMENTS',
      'PARTY INVITES',
      'PERSONAL ILLUSTRATIONS',
      'TRAVEL',
    ]),
    clientOrOccasion: z.string().optional(),
    year: z.number().int(),
    shortDescription: z.string(),
    deliverables: z.array(z.string()),
    coverImage: z.string(),
    galleryImages: z.array(z.string()).default([]),
    featuredOnHome: z.boolean().default(false),
    displayOrder: z.number().default(99),
  }),
});

export const collections = {
  paintings: paintingsCollection,
  illustrations: illustrationsCollection,
};
