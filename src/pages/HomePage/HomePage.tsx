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

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { movies, totalCount, currentPage, pageSize, status, searchQuery } = useAppSelector(
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
        searchQuery: searchQuery
      })
    );
    dispatch(setCurrentPage(1));
    window.scrollTo(0, 0);
  }, [dispatch, currentPage, pageSize, searchQuery]);

  return (
    <>
      <Wrapper styles={s.wrapper}>
        <MovieCardList movies={movies} status={status} />
        <div className={s.pagination}>
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
