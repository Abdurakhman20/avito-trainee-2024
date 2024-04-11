import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchMovies,
  setCurrentPage,
  setPageSize,
} from "../../store/slices/movieSlice";

import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Wrapper from "../../components/Wrapper/Wrapper";
import MyPagination from "../../components/MyPagination/MyPagination";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies, totalCount, currentPage, pageSize } = useAppSelector(
    (state) => state.movie
  );

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const onChangePageSize = (current: number, size: number) => {
    dispatch(setPageSize(size));
  };

  useEffect(() => {
    dispatch(
      fetchMovies({
        currentPage: currentPage,
        limit: pageSize,
      })
    );
    window.scrollTo(0, 0);
  }, [dispatch, currentPage, pageSize]);

  return (
    <>
      <Wrapper>
        <MovieCardList movies={movies} />
        <div>
          <MyPagination
            pageSize={pageSize}
            totalCount={totalCount}
            onChangePage={onChangePage}
            onChangePageSize={onChangePageSize}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default HomePage;
