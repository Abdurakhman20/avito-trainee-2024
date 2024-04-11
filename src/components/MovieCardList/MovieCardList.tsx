import MovieCard from "../../components/MovieCard/MovieCard";
import { MovieStatus } from "../../store/slices/movieSlice";
import type { Movie } from "../../types/Movie";
import { MovieSkeleton } from "../Skeletons";
import s from "./MovieCardList.module.css";

type MovieCardProps = {
  movies: Movie[];
  status: MovieStatus;
};

const MovieCardList = ({ movies, status }: MovieCardProps) => {

  const skeletons = [...new Array(10)].map((_, index) => (
    <MovieSkeleton key={index} />
  ));
  const movieCards = movies.map((movie) => (
    <MovieCard key={movie.id} {...movie} />
  ));

  return (
    <>
      <div className={s.wrapper}>
        {
          status === MovieStatus.LOADING ? skeletons : movieCards
        }
      </div>
    </>
  );
};

export default MovieCardList;
