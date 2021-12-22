import React from 'react';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import type { MainTabParamList } from './MainNavigator';
import LoginStart from './LoginStart';
import Login from './Login';
import SignUpEmail from './SignUpEmail';
import SignUpPassword from './SignUpPassword';
import SignUpNickname from './SignUpNickname';
import PostDetail from './PostDetail';
import AddPost from './AddPost';
import { TouchableView } from './Common';
import { LeftArrowBlack } from '../assets/images';
import type { PostData } from './Common';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  MainNavigator: NavigatorScreenParams<MainTabParamList>;
  LoginStart: undefined;
  Login: undefined;
  SignUpEmail: undefined;
  SignUpPassword: { name: string; email: string };
  SignUpNickname: { name: string; email: string; password: string };
  PostDetail: { post: PostData };
  AddPost: { categoryId: number };
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

const arrowHeaderOption = (navigation: any) => ({
  ...defaultHeaderOption,
  headerLeft: () => (
    <TouchableView onPress={() => navigation.goBack()}>
      <LeftArrowBlack />
    </TouchableView>
  ),
});

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="LoginStart" component={LoginStart} />
      <Stack.Group screenOptions={({ navigation }) => arrowHeaderOption(navigation)}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
        <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
        <Stack.Screen name="SignUpNickname" component={SignUpNickname} />
      </Stack.Group>
      <Stack.Screen name="MainNavigator" component={MainNavigator} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetail}
        options={({ navigation }) => arrowHeaderOption(navigation)}
      />
      <Stack.Screen name="AddPost" component={AddPost} options={({ navigation }) => arrowHeaderOption(navigation)} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
