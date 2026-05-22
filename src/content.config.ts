import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    date: z.string(),
    year: z.number(),
    order: z.number(),
  }),
});

export const collections = { blog };
