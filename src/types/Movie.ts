
type Person = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}
type Country = {
  name: string;
}
type Genre = {
  name: string;
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