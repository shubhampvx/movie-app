import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MovieCardProps } from '@/types';
import { AppColors, Fonts } from '@/assets';
import { Image } from 'expo-image';

const MovieCard = ({ title, rating, image, id }: MovieCardProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('MovieDetail', { id })}
    >
      <Image source={{ uri: image }} style={styles.image} contentFit="cover" />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: AppColors.WHITE,
    borderRadius: 8,
    shadowColor: AppColors.BLACK,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    padding: '1.8%',
    margin: '2.5%',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.7,
    borderRadius: 8,
  },
  title: {
    ...Fonts.ldRegular(16),
    marginVertical: '4.8%',
  },
  rating: {
    ...Fonts.ldRegular(14, 'LIGHT_GREY'),
    marginBottom: '4.8%',
  },
});

export default MovieCard;
