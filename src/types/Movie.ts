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

export type Movie = {
  id: number;
  name: string;
  ageRating: number;
  description: string;
  shortDescription: string;
  logo: {
    url: string;
  };
  backdrop: {
    previewUrl: string;
    url: string;
  };
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
  movieLength: number;
  year: number;
}