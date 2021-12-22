import React, { useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../RootNavigator';
import LoginPresenter from './LoginPresenter';
import { ValidError } from '../Common/CustomTextInput';
import { isApiError, authApi } from '../../api';
import { defaultErrorAlert } from '../../utils';
import { userState } from '../../state';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login: FC<LoginProps> = ({ navigation }) => {
  const setUser = useSetRecoilState(userState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState<ValidError>(null);
  const [errorPassword, setErrorPassword] = useState<ValidError>(null);

  const handleChangeEmail = (text: string) => setEmail(text);
  const handleChangePassword = (text: string) => setPassword(text);
  const handlePressLogin = async () => {
    try {
      const { data } = await authApi.emailLogin({ email, password });
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      setUser(data);
      navigation.navigate('MainNavigator', { screen: 'Home', params: { screen: 'HomeMain' } });
    } catch (error) {
      if (isApiError(error)) {
        const status = error.response?.status;
        const errorMessage = error.response?.data.error;
        switch (status) {
          case 402:
            setErrorEmail({ error: true, errorMessage });
            break;
          case 403:
            setErrorPassword({ error: true, errorMessage });
            break;
          default:
            defaultErrorAlert();
            break;
        }
      } else {
        defaultErrorAlert();
      }
    }
  };

  return (
    <LoginPresenter
      email={email}
      password={password}
      errorEmail={errorEmail}
      errorPassword={errorPassword}
      onChangeEmail={handleChangeEmail}
      onChangePasswrod={handleChangePassword}
      onPressLogin={handlePressLogin}
    />
  );
};

export default Login;
