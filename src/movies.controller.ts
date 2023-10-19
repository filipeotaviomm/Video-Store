import { Request, Response } from "express";
import { Movie } from "./entities";
import {
  createMovieService,
  deleteMovieService,
  getAllMoviesService,
  updateMovieService,
} from "./movies.service";
import { TAllMovies } from "./interfaces/pagination.interface";

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await createMovieService(req.body);

  return res.status(201).json(movie);
};

export const getAllMoviesController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const movies: TAllMovies = await getAllMoviesService(res.locals.pagination);

  return res.status(201).json(movies);
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movie: Movie = await updateMovieService(
    res.locals.foundMovie,
    req.body
  );

  return res.status(200).json(movie);
};

export const deleteMovieController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  await deleteMovieService(res.locals.foundMovie);

  return res.status(204).json();
};
