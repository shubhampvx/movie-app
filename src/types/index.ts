import { AppImages } from '@/assets';
import { RouteProp } from '@react-navigation/native';

export type Movie = {
  id: number;
  title: string;
  year: string;
  genre: string[];
  rating: string;
  director: string;
  plot: string;
  poster: string;
  actors: string[];
  country: string;
  language: string;
  boxOffice: string;
  production: string;
};

export type MovieDetailParams = RouteProp<{ params: { id: number } }>;

export interface MovieCardProps {
  title: string;
  rating: string;
  image: string;
  id: number;
}

export type HeaderProps = {
  showBack?: boolean;
  titleIcon: keyof typeof AppImages;
  title: string;
};

export interface InitialState {
  favorites: Movie[];
  searchQuery: string;
  name: string;
  genre: string[];
}
