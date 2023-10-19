import { iPaginationParams } from "./__tests__/interfaces";
import { Movie } from "./entities";
import { TAllMovies } from "./interfaces/pagination.interface";
import { movieRepo } from "./repositories";

export const createMovieService = async (
  body: Omit<Movie, "id">
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
}: iPaginationParams): Promise<TAllMovies> => {
  const [movies, count] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page, //offset
    take: perPage, //limit
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: movies,
    count,
  };
};

export const updateMovieService = async (
  movie: Movie,
  body: Partial<Movie>
) => {
  return movieRepo.save({ ...movie, ...body });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  await movieRepo.delete(movie);
};
