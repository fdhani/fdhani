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
  }),
});

export const collections = { projects };
