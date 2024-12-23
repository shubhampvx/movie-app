import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ height: top }}>
      <StatusBar animated={true} backgroundColor={'transparent'} barStyle="default" />
    </View>
  );
};
export default CustomStatusBar;
