import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
