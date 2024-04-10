import { AxiosRequestConfig, AxiosResponse } from "axios";
import { makeRequest } from "./makeRequest";

import { Movie } from "../types/Movie";
import { MovieResponse } from "../types/MovieResponse";

const URL = "/movie";

export const getMovies = (config: AxiosRequestConfig = {}): Promise<AxiosResponse<MovieResponse> | undefined> => makeRequest({
  method: "GET",
  url: URL,
  ...config,
});

export const getMovieById = (id: number | string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<Movie> | undefined> => makeRequest({
  method: "GET",
  url: `${URL}/${id}`,
  ...config,
});

export const searchMovie = (query: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<MovieResponse> | undefined> => {

  const updConfig: AxiosRequestConfig = {
    ...config,
    params: {
      query: query,
      ...config.params
    }
  };

  return makeRequest({
    method: "GET",
    url: `${URL}/search`,
    ...updConfig,
  });
}
  
