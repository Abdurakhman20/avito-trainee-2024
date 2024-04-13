import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchMovies,
  setCurrentPage,
  setPageSize,
} from "../../store/slices/movieSlice";
import { useNavigate } from "react-router-dom";

import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Wrapper from "../../components/Wrapper/Wrapper";
import MyPagination from "../../components/MyPagination/MyPagination";
import Filter from "../../components/Filter/Filter";

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { movies, totalCount, currentPage, pageSize, status, searchQuery, filterParams } = useAppSelector(
    (state) => state.movie
  );
  console.log(filterParams)

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
  
    window.scrollTo(0, 0);
  }, [dispatch, currentPage, pageSize, searchQuery, navigate]);

  return (
    <>
      <Wrapper styles={s.wrapper}>
        <Filter />
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
