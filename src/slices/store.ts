import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../network';
import { useDispatch, useSelector } from 'react-redux';
import slice from './slice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  favorites: slice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});
export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
