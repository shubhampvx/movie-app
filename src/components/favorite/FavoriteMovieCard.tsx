import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Movie } from '@/types';
import { AppColors, Fonts } from '@/assets';
import { Image } from 'expo-image';

const FavoriteMovieCard = ({ item }: { item: Movie }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.poster }} contentFit="contain" style={styles.poster} />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.genre}>
            {item.genre} | {item.year}
          </Text>
          <Text style={styles.description} numberOfLines={4}>
            {item.plot}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MovieDetail', { id: item.id })}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteMovieCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: AppColors.WHITE,
    borderRadius: 12,
    padding: '4%',
    marginBottom: '4%',
    shadowColor: AppColors.BLACK,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  poster: {
    width: '35%',
    aspectRatio: 0.59,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: '4.5%',
    justifyContent: 'space-between',
  },
  title: {
    ...Fonts.ldSemiBold(18),
    marginBottom: '3%',
  },
  genre: {
    ...Fonts.ldRegular(14, 'LIGHT_GREY'),
    marginBottom: '5%',
  },
  description: {
    ...Fonts.ldRegular(14, 'LIGHT_GREY'),
    marginBottom: '2%',
  },
  button: {
    backgroundColor: AppColors.PRIMARY,
    paddingVertical: '4%',
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  buttonText: {
    ...Fonts.ldRegular(14, 'WHITE'),
  },
});
