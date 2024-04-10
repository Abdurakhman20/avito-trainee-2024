import { AxiosRequestConfig, AxiosResponse } from "axios";
import { makeRequest } from "./makeRequest";

import { Movie } from "../types/Movie";
import { MovieResponse } from "../types/MovieResponse";

const URL = "/movie";
const token = process.env.REACT_APP_TOKEN;

export const getMovies = (config: AxiosRequestConfig): Promise<AxiosResponse<MovieResponse> | undefined> => makeRequest({
  method: "GET",
  url: URL,
  headers: {
    'X-API-KEY': `${token}`,
    "Content-Type": "Application/json"
  },
  ...config,
});

export const getMovieById = (id: number | string, config: AxiosRequestConfig): Promise<AxiosResponse<Movie> | undefined> => makeRequest({
  method: "GET",
  url: `${URL}/${id}`,
  headers: {
    'X-API-KEY': `${token}`,
    "Content-Type": "Application/json"
  },
  ...config,
});
