import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    short: z.string(),
    org: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    color: z.enum(['yellow', 'pink', 'blue', 'green', 'orange']),
    order: z.number().int().nonnegative(),
    link: z.string().url().optional(),
    links: z.array(z.string().url()).optional(),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { projects, blog };
