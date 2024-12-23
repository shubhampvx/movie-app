import { InitialState, Movie } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  favorites: [],
  searchQuery: '',
  name: '',
  genre: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((movie) => movie.id !== action.payload);
    },
    setFavorites: (state, action: PayloadAction<Movie[]>) => {
      state.favorites = action.payload;
    },
    searchMovies: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setGenre: (state, action: PayloadAction<string[]>) => {
      state.genre = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, searchMovies, setUserName, setGenre, setFavorites } = slice.actions;
export default slice.reducer;
