import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch } from '@/slices/store';
import { storage } from '@/utils';
import { setGenre } from '@/slices/slice';
import { AppButton, AppContainer } from '@/components';
import { AppColors, AppImages, Constants, Fonts } from '@/assets';
import { Image } from 'expo-image';

const GenreSelectionScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { genres } = Constants;

  const handleNext = () => {
    storage.set('genres', JSON.stringify(selectedGenres));
    dispatch(setGenre(selectedGenres));
  };

  const toggleGenreSelection = (genre: string) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.includes(genre)
        ? prevSelectedGenres.filter((g) => g !== genre)
        : [...prevSelectedGenres, genre]
    );
  };

  const genreButton = (genre: string) => {
    const isSelected = selectedGenres.includes(genre);
    return (
      <TouchableOpacity
        key={genre}
        activeOpacity={0.8}
        style={[styles.genreButton, isSelected && styles.selectedGenreButton]}
        onPress={() => toggleGenreSelection(genre)}
      >
        <Text style={{ color: isSelected ? 'white' : 'black', fontSize: 16, fontWeight: '600' }}>{genre}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppContainer style={styles.container}>
      <Image source={AppImages.logo} contentFit="contain" style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>Select Your Favorite Genres</Text>
        <View style={styles.genreContainer}>{genres.map(genreButton)}</View>
        <AppButton title="Next" onPress={handleNext} disabled={selectedGenres.length === 0} style={styles.button} />
      </View>
    </AppContainer>
  );
};

export default GenreSelectionScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: '5.5%',
  },
  icon: {
    marginTop: '7.5%',
    position: 'absolute',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    ...Fonts.interBold(24, 'BLACK'),
    textAlign: 'center',
    marginBottom: '8%',
  },
  button: {
    position: 'absolute',
    bottom: '6.7%',
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreButton: {
    margin: '1.3%',
    borderWidth: 1,
    paddingHorizontal: '4.2%',
    paddingVertical: '2.4%',
    borderRadius: 8,
    borderColor: AppColors.LIGHT_BORDER,
    alignItems: 'center',
  },
  selectedGenreButton: {
    backgroundColor: AppColors.PRIMARY,
    borderColor: AppColors.PRIMARY,
  },
});
