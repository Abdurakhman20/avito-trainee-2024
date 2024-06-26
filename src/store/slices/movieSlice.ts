import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMovies, searchMovie } from "../../api/movies";
import type { Movie } from "../../types/Movie";
import { MovieResponse } from "../../types/MovieResponse";
import { FilterParams } from "../../types/FilterParams";

export enum MovieStatus  {
  LOADING,
  SUCCESS,
  FAILED
};


interface MovieState {
  movies: Movie[],
  filterParams: FilterParams;
  searchQuery?: string;
  totalCount: number,
  currentPage: number,
  pageSize: number,
  status: MovieStatus,
};

const initialState: MovieState = {
  movies: [],
  filterParams: {
    year: "",
    country: "",
    age: ""
  },
  searchQuery: "",
  totalCount: 0,
  currentPage: 1,
  pageSize: 10,
  status: MovieStatus.LOADING,
};

export type fetchMoviesParams = {
  currentPage: number;
  filterParams?: FilterParams; 
  limit?: number;
  searchQuery?: string;
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async ({ currentPage = 1, limit = 10, searchQuery = "", filterParams }: fetchMoviesParams): Promise<MovieResponse | undefined> => {
    if(searchQuery) {
      const response = await searchMovie(searchQuery, {
        params: {
          page: currentPage,
          limit: limit,
          query: searchQuery
        }
      });

      return response?.data;
    }

    const params: Record<string, string> = {};
    
    if (filterParams) {
      if (filterParams.year !== "") params["year"] = filterParams.year;
      if (filterParams.country !== "") params["countries.name"] = filterParams.country;
      if (filterParams.age !== "") params["ageRating"] = filterParams.age;
    }
    const response = await getMovies({
      params: {
        page: currentPage,
        limit: limit,
        ...params
      }
    });

    return response?.data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setFilterParams(state, action: PayloadAction<FilterParams>) {
      state.filterParams = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = MovieStatus.LOADING
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = MovieStatus.SUCCESS;
      state.movies = action.payload?.docs || [];
      state.totalCount = action.payload?.total || 0;
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = MovieStatus.FAILED;
      state.movies = [];
    })
  },
}); 

export const { setCurrentPage, setPageSize, setSearchQuery, setFilterParams } = movieSlice.actions;

export default movieSlice.reducer;