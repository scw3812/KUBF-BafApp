import React, { useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../RootNavigator';
import SignUpPasswordPresenter from './SignUpPasswordPresenter';
import type { ValidError } from '../Common';
import { checkPasswordValidation } from '../../utils/validationUtils';

type SignUpPasswordProps = NativeStackScreenProps<RootStackParamList, 'SignUpPassword'>;

const SignUpPassword: FC<SignUpPasswordProps> = ({ route, navigation }) => {
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState<ValidError>(null);

  const handleChangePassword = (text: string) => setPassword(text);
  const handlePressNext = () => {
    if (!checkPasswordValidation(password)) {
      setErrorPassword({ error: true, errorMessage: '비밀번호 조건이 일치하지 않습니다.' });
      return;
    }
    navigation.navigate('SignUpNickname', { name: route.params.name, email: route.params.email, password });
  };

  return (
    <SignUpPasswordPresenter
      password={password}
      errorPassword={errorPassword}
      onChangePassword={handleChangePassword}
      onPressNext={handlePressNext}
    />
  );
};

export default SignUpPassword;
