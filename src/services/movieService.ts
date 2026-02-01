import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      include_adult: false,
    },
  });
  return response.data.results;
};
