import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { FavoriteScreen, HomeScreen } from '@/screen';
import { AppColors, Constants } from '@/assets';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const { tabs } = Constants;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => {
        return (
          <View>
            <View style={styles.tabBar}>
              {props.state.routes.map((route, index) => {
                const focused = props.state.index === index;
                const color = focused ? AppColors.PRIMARY : AppColors.BLACK;
                const onPress = () => props.navigation.navigate(route.name);

                return (
                  <Pressable key={route.key} style={styles.tabBarItem} onPress={onPress}>
                    <Image source={tabs[index].icon} style={styles.tabBarIcon} tintColor={color} />
                  </Pressable>
                );
              })}
            </View>
          </View>
        );
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    aspectRatio: 5.3,
    backgroundColor: AppColors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.2,
    borderColor: AppColors.LIGHT_BORDER,
    elevation: 2,
    shadowColor: AppColors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
  },
  tabBarItem: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabBarIcon: {
    width: '30%',
    height: undefined,
    aspectRatio: 1.8,
    resizeMode: 'contain',
  },
});
