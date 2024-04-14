import { Poster } from "./Poster";

export type SimilarMovie = {
  id: number;
  name: string;
  rating: {
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
  }
  poster: Poster;
  year: number;
}