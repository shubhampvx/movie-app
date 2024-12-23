import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootState, useAppSelector } from '@/slices/store';
import { AppContainer, AppHeader, FavoriteMovieCard } from '@/components';
import { Fonts } from '@/assets';
import { Movie } from '@/types';

const FavoriteScreen = () => {
  const favoriteMovies = useAppSelector((state: RootState) => state.favorites.favorites);
  const renderMovieCard = ({ item }: { item: Movie }) => <FavoriteMovieCard item={item} />;

  const noData = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={Fonts.ldRegular(16, 'PRIMARY')}>No favorite movies found</Text>
      </View>
    );
  };
  return (
    <AppContainer>
      <AppHeader title="Favorite Movies" titleIcon="heart" />
      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderMovieCard}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={noData}
      />
    </AppContainer>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    padding: '4%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
