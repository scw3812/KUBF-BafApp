import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import HomeMain from './HomeMain';
import Category from './Category';
import globalStyles from '../../style/styles';
import colors from '../../style/colors';

const Stack = createNativeStackNavigator();

export type HomeStackParamList = {
  HomeMain: undefined;
  Category: { categoryId: number; category: string };
};

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const defaultHeaderOption = {
  title: '',
  headerShown: true,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'white',
  },
};

const mainScreenOptions = {
  ...defaultHeaderOption,
  headerLeft: () => <Text style={[globalStyles.textHeadline20, { color: colors.colorPrimary }]}>커뮤니티</Text>,
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeMain" component={HomeMain} options={mainScreenOptions} />
      <Stack.Screen name="Category" component={Category} options={defaultHeaderOption} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
