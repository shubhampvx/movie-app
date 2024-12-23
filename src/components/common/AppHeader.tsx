import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from '@/types';
import { Image } from 'expo-image';
import { AppColors, AppImages, Fonts } from '@/assets';

const AppHeader = ({ showBack, title, titleIcon }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity activeOpacity={0.6} style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={AppImages.arrow} contentFit="contain" style={styles.backArrow} />
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Image source={AppImages[titleIcon]} contentFit="contain" style={styles.icon} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 7.5,
    elevation: 2,
    shadowColor: AppColors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    backgroundColor: AppColors.WHITE,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    height: 56,
    paddingHorizontal: '5.7%',
    justifyContent: 'center',
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '14%',
    height: undefined,
    aspectRatio: 1,
    marginRight: 10,
  },
  titleText: {
    ...Fonts.interMedium(20),
  },
});
