import { Movie } from "./entities";
import { TMovieCreate, TMovieUpdate } from "./interfaces/movies.interface";
import {
  TAllMovies,
  TPaginationParams,
} from "./interfaces/pagination.interface";
import { movieRepo } from "./repositories";

export const createMovieService = async (
  body: TMovieCreate
): Promise<Movie> => {
  const newMovie: Movie = movieRepo.create(body);
  const saveMovie = await movieRepo.save(newMovie);

  return saveMovie;
};

export const getAllMoviesService = async ({
  page,
  perPage,
  prevPage,
  nextPage,
  order,
  sort,
}: TPaginationParams): Promise<TAllMovies> => {
  const [movies, count] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: movies,
    count,
  };
};

export const updateMovieService = async (movie: Movie, body: TMovieUpdate) => {
  return movieRepo.save({ ...movie, ...body });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  await movieRepo.remove(movie);
};
