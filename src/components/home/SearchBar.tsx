import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '@/slices/slice';
import { AppColors, AppImages, Fonts } from '@/assets';
import { Image } from 'expo-image';

const SearchBar = () => {
  const [searchText, setSearchText] = React.useState('');
  const dispatch = useDispatch();

  const handleSearch = (text: string) => {
    setSearchText(text);
    dispatch(searchMovies(text));
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchInput} value={searchText} onChangeText={handleSearch} />
      <Image source={AppImages.search} style={styles.icon} contentFit="contain" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '4.5%',
  },
  searchInput: {
    ...Fonts.ldRegular(17),
    backgroundColor: AppColors.WHITE,
    padding: '3.7%',
    paddingLeft: '7%',
    paddingRight: '17%',
    borderRadius: 50,
    borderWidth: 1,
    width: '100%',
    borderColor: AppColors.PLACEHOLDER,
  },
  icon: {
    width: '10%',
    height: undefined,
    aspectRatio: 1.2,
    position: 'absolute',
    right: '5.5%',
  },
});
