import { z } from "zod";

export const moviesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().int().positive(),
  price: z.number().int(),
});

export const moviesCreateSchema = moviesSchema.omit({ id: true });
moviesCreateSchema.extend({
  description: z.string().optional().nullish(),
});
export const moviesUpdateSchema = moviesCreateSchema.partial();
