export type Movie = {
  id: number;
  name: string;
  ageRating: number;
  alternativeName: string;
  description: string;
  shortDescription: string;
  logo: {
    url: string;
  };
  backdrop: {
    previewUrl: string;
    url: string;
  };
  genres: {
    name: string;
  }[];
  countries: {
    name: string;
  }[];
  rating: {
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
  }
  movieLength: number;
  year: number;
}