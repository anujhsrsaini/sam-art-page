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
      'Cards & Wedding',
      'Personal & Travel',
      'Baby & Children',
      'Pattern',
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

const packagingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    category: z.string().default('Packaging'),
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
  packaging: packagingCollection,
};
