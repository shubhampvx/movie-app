import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import localFonts from '@/assets/localFonts';
import { useAppDispatch } from '@/slices/store';
import { storage } from '@/utils';
import { setFavorites, setGenre, setUserName } from '@/slices/slice';
import { BottomInset, CustomStatusBar } from '@/components';
import MainStack from './MainStack';

SplashScreen.preventAutoHideAsync();

const MainNavigation = () => {
  const [loaded, error] = useFonts(localFonts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (loaded || error) {
      if (storage.getString('username')) {
        dispatch(setUserName(storage.getString('username') || ''));
      }

      if (storage.getString('genres')) {
        const genres = storage.getString('genres');
        if (genres) {
          dispatch(setGenre(JSON.parse(genres)));
        }
      }

      if (storage.getString('favorites')) {
        const favorites = storage.getString('favorites');
        if (favorites) {
          dispatch(setFavorites(JSON.parse(favorites)));
        }
      }

      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <CustomStatusBar />
      <MainStack />
      <BottomInset />
    </SafeAreaProvider>
  );
};

export default MainNavigation;
