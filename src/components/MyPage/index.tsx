import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import MyPageMain from './MyPageMain';
import ProfilePost from './ProfilePost';
import ProfileComment from './ProfileComment';
import globalStyles from '../../style/styles';
import colors from '../../style/colors';

const Stack = createNativeStackNavigator();

export type MyPageStackParamList = {
  MyPageMain: undefined;
  ProfilePost: undefined;
  ProfileComment: undefined;
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
  headerLeft: () => <Text style={[globalStyles.textHeadline20, { color: colors.colorPrimary }]}>마이페이지</Text>,
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MyPageMain" component={MyPageMain} options={mainScreenOptions} />
      <Stack.Screen name="ProfilePost" component={ProfilePost} options={defaultHeaderOption} />
      <Stack.Screen name="ProfileComment" component={ProfileComment} options={defaultHeaderOption} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
