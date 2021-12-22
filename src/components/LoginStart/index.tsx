import React, { useEffect } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

import { RootStackParamList } from '../RootNavigator';
import LoginStartPresenter from './LoginStartPresenter';
import { authApi } from '../../api';
import { defaultErrorAlert } from '../../utils';
import { userState } from '../../state';

type LoginStartProps = NativeStackScreenProps<RootStackParamList, 'LoginStart'>;

const LoginStart: FC<LoginStartProps> = ({ navigation }) => {
  const setUser = useSetRecoilState(userState);

  const autoLogin = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      if (email && password) {
        const { data } = await authApi.emailLogin({ email, password });
        setUser(data);
        navigation.navigate('MainNavigator', { screen: 'Home', params: { screen: 'HomeMain' } });
      }
    } catch (error) {
      defaultErrorAlert();
    }
  };
  useEffect(() => {
    const id = setTimeout(async () => {
      await autoLogin();
      SplashScreen.hide();
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  const handlePressLogin = async () => navigation.navigate('Login');
  const handlePressSignUp = () => navigation.navigate('SignUpEmail');

  return <LoginStartPresenter onPressLogin={handlePressLogin} onPressSignUp={handlePressSignUp} />;
};

export default LoginStart;
