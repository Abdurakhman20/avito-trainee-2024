import type { Person } from "./Person";

type Country = {
  name: string;
}
type Genre = {
  name: string;
}
export type SeasonsInfo = {
  number: number;
  episodesCount: number;
}
export type Poster = {
  previewUrl: string;
  url: string;
}
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

export type Movie = {
  id: number;
  name: string;
  ageRating: number;
  description: string;
  backdrop: {
    previewUrl: string;
    url: string;
  };
  similarMovies: SimilarMovie[];
  poster: Poster;
  seasonsInfo: SeasonsInfo[];
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  rating: {
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
  }
  year: number;
}