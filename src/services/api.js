// ⚠️ DISCLAIMER:
// You must add your TMDB API key in the `API_KEY` variable below.
// Without it, the functions `getPopularMovies` and `searchMovies` will not return any data.

const API_KEY = ""; // <-- Add your API key here
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
