import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './SignUpNickname.style';
import globalStyles from '../../style/styles';
import { Button, CustomTextInput } from '../Common';
import { ValidError } from '../Common/CustomTextInput';
import colors from '../../style/colors';

interface SignUpNicknamePresenterProps {
  nickname: string;
  errorNickname: ValidError;
  onChangeNickname: (text: string) => void;
  onPressNext: () => void;
}

const SignUpNicknamePresenter: FC<SignUpNicknamePresenterProps> = ({
  nickname,
  errorNickname,
  onChangeNickname,
  onPressNext,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View>
        <Text style={[globalStyles.textHeadline24, styles.textTitle]}>닉네임을 설정해주세요!</Text>
        <Text style={[globalStyles.textBody15, styles.textDescription]}>
          게시글 및 댓글에 보이는 닉네임을 설정해주세요.{'\n'}
          설정한 닉네임은 변경이 어려우니 신중히 결정해주세요!
        </Text>
        <CustomTextInput value={nickname} validError={errorNickname} onChangeText={onChangeNickname} />
      </View>
      <Button
        disabled={nickname === ''}
        title="시작하기"
        textColor={nickname === '' ? 'black' : undefined}
        backgroundColor={nickname === '' ? colors.colorGray : undefined}
        onPress={onPressNext}
      />
    </SafeAreaView>
  );
};

export default SignUpNicknamePresenter;
