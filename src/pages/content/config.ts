import { defineCollection, z } from "astro:content";

export const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lang: z.string(),
  }),
});
