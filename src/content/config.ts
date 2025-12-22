import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    socialLink: z.string().optional(),
    link: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    SEO: z.boolean().optional(),
    SEOTitle: z.string().optional(),
    SEODescription: z.string().optional(),
    SEOImage: z.string().optional(),
    draft: z.boolean().optional(),
    
  }),
  // Markdoc files will be supported automatically
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    socialLink: z.string().optional(),
    link: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    SEO: z.boolean().optional(),
    SEOTitle: z.string().optional(),
    SEODescription: z.string().optional(),
    SEOImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects };