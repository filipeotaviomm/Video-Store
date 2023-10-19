import { Movie } from "../entities";

export type TPagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Movie[];
};

export type TPaginationParams = {
  page: number;
  perPage: number;
  order: string;
  sort: string;
  prevPage: string | null;
  nextPage: string | null;
};

export type TAllMovies = {
  prevPage: string | null;
  nextPage: string | null;
  data: Movie[];
  count: number;
};
