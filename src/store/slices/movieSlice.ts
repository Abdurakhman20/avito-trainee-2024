import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api/movies";
import type { Movie } from "../../types/Movie";

enum MovieStatus  {
  LOADING,
  SUCCESS,
  FAILED
};

interface MovieState {
  movies: Movie[],
  status: MovieStatus,
};

const initialState: MovieState = {
  movies: [],
  status: MovieStatus.LOADING,
};

export type fetchMoviesParams = {
  currentPage: number;
  limit?: number;
};

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async ({ currentPage, limit = 10 }: fetchMoviesParams): Promise<Movie[]> => {
    const response = await getMovies({
      params: {
        page: currentPage,
        limit: limit
      }
    });

    return response?.data.docs || []
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = MovieStatus.LOADING
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = MovieStatus.SUCCESS;
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = MovieStatus.FAILED;
      state.movies = [];
    })
  },
}); 

export default movieSlice.reducer;