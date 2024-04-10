import { Movie } from "./Movie";

export interface MovieResponse {
  docs: Movie[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}