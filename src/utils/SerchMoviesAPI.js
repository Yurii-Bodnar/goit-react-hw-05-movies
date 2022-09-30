import axios from 'axios';

const API_KEY = '96f98372ec97554f75b9ec4b9ecd00d9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getRequestSearchMovies = async (query, page) => {
  try {
    const { data } = await axios.get('/search/movie/', {
      params: {
        query,
        page,
        api_key: API_KEY,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getRequestTrendingMovies = async () => {
  try {
    const { data } = await axios.get('/trending/movie/week', {
      params: {
        api_key: API_KEY,
        page:1,
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getRequestMoviesDitails = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRequestMoviesCast = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getRequestMoviesReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
