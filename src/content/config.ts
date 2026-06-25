import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    layout: z.string().default('BaseLayout'),
  }).passthrough(),
});

export const collections = {
  pages: pagesCollection,
};
