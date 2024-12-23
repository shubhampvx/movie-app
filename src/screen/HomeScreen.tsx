import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootState, useAppSelector } from '@/slices/store';
import { useDebounceValue } from '@/hooks';
import { api } from '@/network';
import { AppContainer, AppHeader, LoadingContainer, MovieCard, SearchBar } from '@/components';
import { Movie } from '@/types';
import { Fonts } from '@/assets';

const HomeScreen = () => {
  const query = useAppSelector((state: RootState) => state.favorites.searchQuery);
  const searchQuery = useDebounceValue(query);
  const { data: moviesData, isLoading } = searchQuery
    ? api.useSearchMoviesQuery(searchQuery)
    : api.useFetchMoviesQuery({});

  const renderItem = ({ item }: { item: Movie }) => (
    <MovieCard id={item.id} title={item.title} rating={item.rating} image={item.poster} />
  );

  const noData = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={Fonts.ldRegular(16, 'PRIMARY')}>Unable to find anything at this moment</Text>
      </View>
    );
  };

  return (
    <AppContainer>
      <AppHeader title="My Movies" titleIcon="home" />
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <>
          <SearchBar />
          <FlatList
            data={moviesData}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id?.toString()}
            numColumns={2}
            bounces={false}
            ListEmptyComponent={noData}
            contentContainerStyle={styles.listContent}
          />
        </>
      )}
    </AppContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
