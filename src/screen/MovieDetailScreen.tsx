import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'expo-image';
import { api } from '@/network';
import { RootState } from '@/slices/store';
import { storage } from '@/utils';
import { addFavorite, removeFavorite } from '@/slices/slice';
import { AppButton, AppContainer, AppHeader, LoadingContainer } from '@/components';
import { AppColors, Constants, Fonts } from '@/assets';
import { MovieDetailParams } from '@/types';

const MovieDetailScreen = () => {
  const route = useRoute<MovieDetailParams>();
  const id = route.params.id;
  const { data, isLoading } = api.useFetchMovieByIdQuery({ id });
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.some((movie) => movie.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      const updatedFavorites = favorites.filter((movie) => movie.id !== id);
      storage.set('favorites', JSON.stringify(updatedFavorites));
      dispatch(removeFavorite(id));
    } else {
      const updatedFavorites = [...favorites, data];
      storage.set('favorites', JSON.stringify(updatedFavorites));
      dispatch(addFavorite(data));
    }
  };

  const genres = data?.genre ? data.genre.join(', ') : '';
  const actors = data?.actors ? data.actors.join(', ') : '';

  return (
    <AppContainer>
      <AppHeader title="My Movies" titleIcon="home" showBack />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.posterContainer}>
              <Image source={{ uri: data.poster }} style={styles.poster} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Text style={styles.description} numberOfLines={5}>
                {data.plot}
              </Text>
              {Constants.detailList(data, genres, actors).map((item) => (
                <View style={styles.infoRow} key={item.id}>
                  <Text style={styles.infoLabel}>{item.label}</Text>
                  <Text style={styles.infoValue}>{item.value}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View style={styles.bottomContainer}>
            <AppButton title={`Mark as ${isFavorite ? 'Unfavorite' : 'Favorite'}`} onPress={handleFavoriteToggle} />
          </View>
        </>
      )}
    </AppContainer>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: '4%',
  },
  posterContainer: {
    width: '70%',
    aspectRatio: 0.71,
    alignSelf: 'center',
    borderRadius: 12,
    shadowColor: AppColors.BLACK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: '9%',
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'contain',
  },
  detailsContainer: {
    paddingHorizontal: '2%',
  },
  title: {
    ...Fonts.ldBold(24),
    marginBottom: '2%',
  },
  description: {
    ...Fonts.ldRegular(16, 'PLOT_TEXT'),
    marginBottom: '4%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  infoLabel: {
    ...Fonts.ldRegular(14, 'LIGHT_GREY'),
    width: '30%',
  },
  infoValue: {
    ...Fonts.ldRegular(14),
    width: '50%',
    textAlign: 'right',
  },
  bottomContainer: {
    padding: '4%',
    marginBottom: '7.5%',
  },
});
