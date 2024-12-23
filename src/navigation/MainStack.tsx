import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootState, useAppSelector } from '@/slices/store';
import { GenreSelectionScreen, MovieDetail, WelcomeScreen } from '@/screen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const userName = useAppSelector((state: RootState) => state.favorites.name);
  const genre = useAppSelector((state: RootState) => state.favorites.genre);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userName ? (
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        ) : genre.length === 0 ? (
          <Stack.Screen name="GenreSelection" component={GenreSelectionScreen} />
        ) : (
          <>
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
