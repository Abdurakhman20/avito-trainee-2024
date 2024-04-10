import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovies } from "../../store/slices/movieSlice";

import Wrapper from "../../components/Wrapper/Wrapper";
import MovieCard from "../../components/MovieCard/MovieCard";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movie.movies);

  useEffect(() => {
    dispatch(fetchMovies({
      currentPage: 2
    }))
  }, [dispatch])

  return (
    <>
      <Wrapper>
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </Wrapper>
    </>
  );
};

export default HomePage;
