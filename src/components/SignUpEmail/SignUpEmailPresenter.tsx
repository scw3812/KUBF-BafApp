import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SignUpEmail.style';
import globalStyles from '../../style/styles';
import { Button, CustomTextInput } from '../Common';
import { ValidError } from '../Common/CustomTextInput';
import colors from '../../style/colors';

interface SignUpEmailPresenterProps {
  name: string;
  email: string;
  errorEmail: ValidError;
  onChangeName: (text: string) => void;
  onChangeEmail: (text: string) => void;
  onPressNext: () => void;
}

const SignUpEmailPresenter: FC<SignUpEmailPresenterProps> = ({
  name,
  email,
  errorEmail,
  onChangeName,
  onChangeEmail,
  onPressNext,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View>
        <Text style={[globalStyles.textHeadline24, styles.textTitle]}>이름과 이메일을 입력해주세요</Text>
        <Text style={[globalStyles.textBody15, styles.textDescription]}>
          소중한 개인정보는 서비스운영에만 사용됩니다 :)
        </Text>
        <CustomTextInput title="이름" value={name} onChangeText={onChangeName} />
        <CustomTextInput
          title="이메일"
          value={email}
          validError={errorEmail}
          keyboardType="email-address"
          onChangeText={onChangeEmail}
        />
      </View>
      <Button
        disabled={name === '' || email === ''}
        title="다음 (1/3)"
        textColor={name === '' || email === '' ? 'black' : undefined}
        backgroundColor={name === '' || email === '' ? colors.colorGray : undefined}
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default SignUpEmailPresenter;
