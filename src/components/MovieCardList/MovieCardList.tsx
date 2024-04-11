import MovieCard from "../../components/MovieCard/MovieCard";
import type { Movie } from "../../types/Movie";
import s from "./MovieCardList.module.css";

type MovieCardProps = {
  movies: Movie[]
}

const MovieCardList = ({ movies }: MovieCardProps) => {
   
  return (
    <>
      <div className={s.wrapper}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MovieCardList;
