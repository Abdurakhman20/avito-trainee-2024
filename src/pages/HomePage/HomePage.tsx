import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchMovies,
  setCurrentPage,
  setPageSize,
  setFilterParams,
} from "../../store/slices/movieSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Wrapper from "../../components/Wrapper/Wrapper";
import MyPagination from "../../components/MyPagination/MyPagination";
import Filter from "../../components/Filter/Filter";

import s from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    movies,
    totalCount,
    currentPage,
    pageSize,
    status,
    searchQuery,
    filterParams,
  } = useAppSelector((state) => state.movie);

  const onChangePage = (page: number) => {
    setSearchParams((params) => ({ ...params, page: `${page}` }));
    dispatch(setCurrentPage(page));
  };

  const onChangePageSize = (current: number, size: number) => {
    setSearchParams((params) => ({ ...params, limit: `${size}` }));
    dispatch(setPageSize(size));
  };

  const currentPageQuery = Number(searchParams.get("page")) || 1;
  const pageSizeQuery = Number(searchParams.get("limit")) || 10;
  const yearQuery = searchParams.get("year") || "";
  const countryQuery = searchParams.get("country") || "";
  const ageQuery = searchParams.get("age") || "";

  useEffect(() => {
    // Сталкивался с проблемой, что при изменении значений query параметров в url или обновлении страницы
    // у меня эти значения сбрасывались на дефолтные. Все получилось исправить с помощью этого useEffect
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const year = searchParams.get("year") || "";
    const country = searchParams.get("country") || "";
    const age = searchParams.get("age") || "";

    dispatch(setCurrentPage(page));
    dispatch(setPageSize(limit));
    dispatch(
      setFilterParams({
        year,
        country,
        age,
      })
    );

    window.scrollTo(0, 0);
  }, [dispatch, searchParams]);

  useEffect(() => {
    setSearchParams((params) => ({
      ...params,
      page: `${currentPage}`,
      limit: `${pageSize}`,
      year: filterParams.year,
      country: filterParams.country,
      age: filterParams.age,
    }));

    dispatch(
      fetchMovies({
        currentPage: currentPageQuery,
        limit: pageSizeQuery,
        searchQuery: searchQuery,
        filterParams: {
          year: yearQuery,
          country: countryQuery,
          age: ageQuery,
        },
      })
    );

    window.scrollTo(0, 0);
  }, [
    dispatch,
    currentPage,
    pageSize,
    searchQuery,
    filterParams,
    currentPageQuery,
    pageSizeQuery,
    ageQuery,
    yearQuery,
    countryQuery,
    setSearchParams,
    navigate,
  ]);

  return (
    <>
      <Wrapper styles={s.wrapper}>
        <Filter />
        <MovieCardList movies={movies} status={status} />
        <div className={s.pagination}>
          <MyPagination
            pageSize={pageSize}
            currentPage={currentPageQuery}
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
