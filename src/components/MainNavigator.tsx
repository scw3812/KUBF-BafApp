import React from 'react';
import type { FC } from 'react';
import { Text } from 'react-native';
import type { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Direct from './Direct';
import MyPage from './MyPage';
import type { HomeStackParamList } from './Home';
import type { MyPageStackParamList } from './MyPage';
import { responsiveHeight as rh, responsiveWidth as rw } from '../style/dimensions';
import {
  HomeIconInactive,
  HomeIconActive,
  HeartIconInactive,
  HeartIconActive,
  MyPageIconInactive,
  MyPageIconActive,
} from '../assets/images';
import colors from '../style/colors';
import globalStyles from '../style/styles';

const Tab = createBottomTabNavigator();

export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Direct: undefined;
  MyPage: NavigatorScreenParams<MyPageStackParamList>;
};

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: rh(80),
    paddingTop: rh(12),
    backgroundColor: colors.colorPrimary,
  },
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: `${colors.colorGray}80`,
};

const homeOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => (focused ? <HomeIconActive /> : <HomeIconInactive />),
  tabBarLabel: '게시판',
};
const directOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => (focused ? <HeartIconActive /> : <HeartIconInactive />),
  tabBarLabel: '다이렉트 연결',
  title: '',
  headerShown: true,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'white',
  },
  headerLeft: () => (
    <Text style={[globalStyles.textHeadline20, { color: colors.colorPrimary, marginLeft: rw(16) }]}>다이렉트 연결</Text>
  ),
};
const myPageOptions: BottomTabNavigationOptions = {
  tabBarIcon: ({ focused }) => (focused ? <MyPageIconActive /> : <MyPageIconInactive />),
  tabBarLabel: '마이페이지',
};

const MainNavigator: FC = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={homeOptions} />
      <Tab.Screen name="Direct" component={Direct} options={directOptions} />
      <Tab.Screen name="MyPage" component={MyPage} options={myPageOptions} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
