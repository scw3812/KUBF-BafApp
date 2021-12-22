import React, { useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../RootNavigator';
import SignUpNicknamePresenter from './SignUpNicknamePresenter';
import type { ValidError } from '../Common';
import { isApiError, signupApi } from '../../api';
import { defaultErrorAlert } from '../../utils';
import { userState } from '../../state';

type SignUpNicknameProps = NativeStackScreenProps<RootStackParamList, 'SignUpNickname'>;

const SignUpNickname: FC<SignUpNicknameProps> = ({ route, navigation }) => {
  const setUser = useSetRecoilState(userState);
  const [nickname, setNickname] = useState('');
  const [errorNickname, setErrorNickname] = useState<ValidError>(null);

  const handleChangeNickname = (text: string) => setNickname(text);
  const handlePressNext = async () => {
    try {
      const { name, email, password } = route.params;
      await signupApi.getNicknameDuplicate({ nickname });
      const { data } = await signupApi.emailSignUp({ name, email, password, nickname });
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      setUser({ id: data.id, name, nickname });
      navigation.navigate('MainNavigator', { screen: 'Home', params: { screen: 'HomeMain' } });
    } catch (error) {
      if (isApiError(error)) {
        const status = error.response?.status;
        const errorMessage = error.response?.data.error;
        if (status === 400) {
          setErrorNickname({ error: true, errorMessage });
        } else {
          defaultErrorAlert();
        }
      } else {
        defaultErrorAlert();
      }
    }
  };

  return (
    <SignUpNicknamePresenter
      nickname={nickname}
      errorNickname={errorNickname}
      onChangeNickname={handleChangeNickname}
      onPressNext={handlePressNext}
    />
  );
};

export default SignUpNickname;
