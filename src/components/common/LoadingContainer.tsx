import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppColors, Fonts } from '@/assets';

const LoadingContainer = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={AppColors.PRIMARY} />
      <Text style={styles.text}>Please wait while we loading...</Text>
    </View>
  );
};

export default LoadingContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Fonts.ldRegular(16, 'PRIMARY'),
    marginTop: '4%',
  },
});
