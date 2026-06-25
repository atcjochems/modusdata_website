import { defineCollection, z } from 'astro:content';

// Define a flexible, safe schema for all markdown-backed pages
const pagesCollection = defineCollection({
  type: 'content', // Explicitly declare as body content type
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    layout: z.string().default('BaseLayout'),
    subtitle: z.string().optional(),
  }).passthrough(), // Bypasses strict schema blocks for custom template properties
});

export const collections = {
  'pages': pagesCollection,
};