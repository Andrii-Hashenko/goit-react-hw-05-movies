const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '900c3c2e823d6abe3929dac959f94e63';
async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function getMovieBySearch(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?&query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
}

export function getCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function getReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
export function GetTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
}

export function getMoviesById(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}
