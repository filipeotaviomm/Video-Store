import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  getAllMoviesController,
  updateMovieController,
} from "./movies.controller";
import { isMovieIdValid } from "./middlewares/isMovieIdValid.middleware";
import { validateBody } from "./middlewares/validateBody.middleware";
import { moviesCreateSchema, moviesUpdateSchema } from "./movies.schema";
import { pagination } from "./middlewares/pagination.middleware";
import { isMovieNameUnique } from "./middlewares/isMovieNameUnique.middleware";

export const moviesRouter = Router();

moviesRouter.post(
  "/",
  validateBody(moviesCreateSchema),
  isMovieNameUnique,
  createMovieController
);
moviesRouter.get("/", pagination, getAllMoviesController);

moviesRouter.use("/:movieId", isMovieIdValid);

moviesRouter.patch(
  "/:movieId",
  validateBody(moviesUpdateSchema),
  isMovieNameUnique,
  updateMovieController
);
moviesRouter.delete("/:movieId", deleteMovieController);
