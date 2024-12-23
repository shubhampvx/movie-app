import { AppColors } from '@/assets';
import { StyleSheet, View, ViewProps } from 'react-native';

const AppContainer = (props: ViewProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});

export default AppContainer;
