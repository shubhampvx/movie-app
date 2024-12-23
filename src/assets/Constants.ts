import { Movie } from '@/types';
import { AppImages } from '.';

export default {
  tabs: [
    { icon: AppImages.homeTab, title: 'Home' },
    { icon: AppImages.heartTab, title: 'Favorite' },
  ],
  genres: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'],
  detailList: (data: Movie, genres: string, actors: string) => [
    { id: 1, label: 'Year of Release:', value: data?.year },
    { id: 2, label: 'Genre:', value: genres },
    { id: 3, label: 'rating:', value: data?.rating },
    { id: 4, label: 'Director:', value: data?.director },
    { id: 5, label: 'Actors:', value: actors },
    { id: 6, label: 'Country:', value: data?.country },
    { id: 7, label: 'Language:', value: data?.language },
    { id: 8, label: 'Box Office:', value: data?.country },
    { id: 9, label: 'Production:', value: data?.production },
  ],
};
