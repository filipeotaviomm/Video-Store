import { z } from "zod";

export const moviesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullable(),
  duration: z.number().int(),
  price: z.number().int(),
});

export const moviesCreateSchema = moviesSchema.omit({ id: true });
export const moviesUpdateSchema = moviesCreateSchema.partial();
