import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const candidatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    name: z.string(),
    photo: z.string(),
    bio: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
  candidates: candidatesCollection,
};
