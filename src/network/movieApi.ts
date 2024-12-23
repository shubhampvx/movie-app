import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_BASE_URL = 'https://www.freetestapi.com/api/v1/movies';

const api = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: () => '',
    }),
    fetchMovieById: builder.query({
      query: ({ id }) => `/${id}`,
    }),
    searchMovies: builder.query({
      query: (query) => `?search=${query}`,
    }),
  }),
});

export default api;
