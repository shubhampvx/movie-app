import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppColors, Fonts } from '@/assets';

type Props = {
  onPress: () => void;
  disabled?: boolean;
  title: string;
  style?: object;
};

const AppButton = ({ onPress, disabled, title, style }: Props) => {
  const disabledStyle = { opacity: disabled ? 0.8 : 1 };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style, disabledStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...Fonts.ldRegular(16, 'WHITE'),
  },
});
