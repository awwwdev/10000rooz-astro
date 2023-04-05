import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    features: z.array(z.string()),
    // Transform string to Date object
    datePublished: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    dateUpdated: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    // heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
