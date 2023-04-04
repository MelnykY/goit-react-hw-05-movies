import axios from 'axios';

const API_KEY = 'bad873a72299f6199f58673bb9d2d11e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrending = async abort => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
    {
      signal: abort.signal,
    }
  );
  return response;
};

const getSearchMovies = async (abort, query) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
    {
      signal: abort.signal,
    }
  );
  return response;
};

const getMovieDetails = async (abort, id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}`,
    {
      signal: abort.signal,
    }
  );
  return response;
};

const getMovieCredits = async (abort, id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`,
    {
      signal: abort.signal,
    }
  );
  return response;
};

const getMovieReviews = async (abort, id) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`,
    {
      signal: abort.signal,
    }
  );
  return response;
};

export {
  getTrending,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
