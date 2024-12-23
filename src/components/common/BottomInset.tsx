import { AppColors } from '@/assets';
import React from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BottomInset = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      style={{
        height: Platform.select({ android: bottom, default: 0 }),
        backgroundColor: AppColors.TRANSPARENT,
      }}
    />
  );
};

export default BottomInset;
