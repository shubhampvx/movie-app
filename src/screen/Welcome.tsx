import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch } from '@/slices/store';
import { storage } from '@/utils';
import { setUserName } from '@/slices/slice';
import { AppButton, AppContainer } from '@/components';
import { AppColors, AppImages, Fonts } from '@/assets';
import { Image } from 'expo-image';

const WelcomeScreen = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const handleNext = () => {
    storage.set('username', name);
    dispatch(setUserName(name));
  };

  return (
    <AppContainer style={styles.container}>
      <Image source={AppImages.logo} contentFit="contain" style={styles.icon} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to My Movies</Text>
          <Text style={styles.subtitle}>Let's get to know you!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor={AppColors.PLACEHOLDER}
          value={name}
          onChangeText={setName}
        />
        <AppButton title="Next" onPress={handleNext} disabled={!name} />
      </View>
    </AppContainer>
  );
};

export default WelcomeScreen;

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
  textContainer: {
    alignItems: 'center',
    marginBottom: '13%',
  },
  title: {
    ...Fonts.interBold(24),
    marginBottom: '2%',
  },
  subtitle: {
    ...Fonts.ldRegular(16, 'LIGHT_TEXT_GREY'),
    marginBottom: '8.2%',
  },
  input: {
    ...Fonts.ldRegular(16),
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: AppColors.BORDER,
    borderRadius: 8,
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
});
