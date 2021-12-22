import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Login.style';
import globalStyles from '../../style/styles';
import { Button, CustomTextInput } from '../Common';
import colors from '../../style/colors';
import type { ValidError } from '../Common';

interface LoginPresenterProps {
  email: string;
  password: string;
  errorEmail: ValidError;
  errorPassword: ValidError;
  onChangeEmail: (text: string) => void;
  onChangePasswrod: (text: string) => void;
  onPressLogin: () => void;
}

const LoginPresenter: FC<LoginPresenterProps> = ({
  email,
  password,
  errorEmail,
  errorPassword,
  onChangeEmail,
  onChangePasswrod,
  onPressLogin,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View>
        <Text style={[globalStyles.textHeadline28, styles.textTitle]}>로그인</Text>
        <Text style={[globalStyles.textBody15, styles.textDescription]}>
          회원가입할 때 사용한 이메일과 비밀번호를 입력해주세요.{'\n'}
          로그인함에 따라 <Text style={styles.textAgree}>서비스이용약관</Text> 및{' '}
          <Text style={styles.textAgree}>개인정보처리방침</Text>에 {'\n'}동의합니다.
        </Text>
        <CustomTextInput
          value={email}
          title="이메일"
          validError={errorEmail}
          keyboardType="email-address"
          onChangeText={onChangeEmail}
        />
        <CustomTextInput
          secureTextEntry
          title="비밀번호"
          value={password}
          validError={errorPassword}
          onChangeText={onChangePasswrod}
        />
      </View>
      <Button
        disabled={email === '' || password === ''}
        title="시작하기"
        textColor={email === '' || password === '' ? 'black' : undefined}
        backgroundColor={email === '' || password === '' ? colors.colorGray : undefined}
        onPress={onPressLogin}
      />
    </SafeAreaView>
  );
};

export default LoginPresenter;
