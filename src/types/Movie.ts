import { Country } from "./Country";
import { Genre } from "./Genre";
import type { Person } from "./Person";
import { Poster } from "./Poster";
import { SeasonsInfo } from "./SeasonsInfo";
import { SimilarMovie } from "./SimilarMovie";

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

