import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovies } from "../../store/slices/movieSlice";

import MovieCard from "../../components/MovieCard/MovieCard";

import s from "./MovieCardList.module.css";

const MovieCardList = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(
      fetchMovies({
        currentPage: 2,
      })
    );
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      {movies.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </div>
  );
};

export default MovieCardList;
