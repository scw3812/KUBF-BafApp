import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SignUpPassword.style';
import globalStyles from '../../style/styles';
import { Button, CustomTextInput } from '../Common';
import { ValidError } from '../Common/CustomTextInput';
import colors from '../../style/colors';

interface SignUpPasswordPresenterProps {
  password: string;
  errorPassword: ValidError;
  onChangePassword: (text: string) => void;
  onPressNext: () => void;
}

const SignUpPasswordPresenter: FC<SignUpPasswordPresenterProps> = ({
  password,
  errorPassword,
  onChangePassword,
  onPressNext,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View>
        <Text style={[globalStyles.textHeadline24, styles.textTitle]}>비밀번호를 설정해주세요</Text>
        <Text style={[globalStyles.textBody15, styles.textDescription]}>
          8-16자 이내의 영문 대소문자, 숫자, 특수문자를 사용하세요.
        </Text>
        <CustomTextInput
          secureTextEntry
          title="비밀번호"
          value={password}
          validError={errorPassword}
          onChangeText={onChangePassword}
        />
      </View>
      <Button
        disabled={password === ''}
        title="다음 (2/3)"
        textColor={password === '' ? 'black' : undefined}
        backgroundColor={password === '' ? colors.colorGray : undefined}
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default SignUpPasswordPresenter;
