import axios from "axios";
import type { MoviesResponse } from "../types/movie";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    accept: "application/json",
  },
});

export const fetchMovies = async (
  query: string,
  page: number,
): Promise<MoviesResponse> => {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });

  return response.data;
};
