import React, { useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../RootNavigator';
import SignUpEmailPresenter from './SignUpEmailPresenter';
import type { ValidError } from '../Common';
import { isApiError, signupApi } from '../../api';
import { defaultErrorAlert, checkEmailValidation } from '../../utils';

type SignUpEmailProps = NativeStackScreenProps<RootStackParamList, 'SignUpEmail'>;

const SignUpEmail: FC<SignUpEmailProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState<ValidError>(null);

  const handleChangeName = (text: string) => setName(text);
  const handleChangeEmail = (text: string) => setEmail(text);
  const handlePressNext = async () => {
    if (!checkEmailValidation(email)) {
      setErrorEmail({ error: true, errorMessage: '올바른 이메일 형식이 아닙니다.' });
      return;
    }
    try {
      await signupApi.getEmailDuplicate({ email });
      navigation.navigate('SignUpPassword', { name, email });
    } catch (error) {
      if (isApiError(error)) {
        const status = error.response?.status;
        const errorMessage = error.response?.data.error;
        if (status === 400) {
          setErrorEmail({ error: true, errorMessage });
        } else {
          defaultErrorAlert();
        }
      } else {
        defaultErrorAlert();
      }
    }
  };

  return (
    <SignUpEmailPresenter
      name={name}
      email={email}
      errorEmail={errorEmail}
      onChangeEmail={handleChangeEmail}
      onChangeName={handleChangeName}
      onPressNext={handlePressNext}
    />
  );
};

export default SignUpEmail;
