import { z } from "zod";
import { moviesCreateSchema } from "../schemas/movies.schema";
import { DeepPartial } from "typeorm";
import { Movie } from "../entities";

export type TMovieCreate = z.infer<typeof moviesCreateSchema>;

export type TMovieUpdate = DeepPartial<Movie>;
