import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";
import type { Movie } from "../../types/Movie";
import { MovieResponse } from "../../types/MovieResponse";

export enum MovieStatus  {
  LOADING,
  SUCCESS,
  FAILED
};

interface MovieState {
  movies: Movie[],
  totalCount: number,
  currentPage: number,
  pageSize: number,
  status: MovieStatus,
};

const initialState: MovieState = {
  movies: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 10,
  status: MovieStatus.LOADING,
};

export type fetchMoviesParams = {
  currentPage: number;
  limit?: number;
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async ({ currentPage = 1, limit = 10 }: fetchMoviesParams): Promise<MovieResponse | undefined> => {
    const response = await getMovies({
      params: {
        page: currentPage,
        limit: limit
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

export const { setCurrentPage, setPageSize } = movieSlice.actions;

export default movieSlice.reducer;