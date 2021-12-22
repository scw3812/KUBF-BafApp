import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Svg, Ellipse, Rect } from 'react-native-svg';

import styles from './LoginStart.style';
import globalStyles from '../../style/styles';
import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';
import { Button, TouchableView } from '../Common';
import colors from '../../style/colors';

interface LoginStartPresenterProps {
  onPressLogin: () => void;
  onPressSignUp: () => void;
}

const LoginStartPresenter: FC<LoginStartPresenterProps> = ({ onPressLogin, onPressSignUp }) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View>
        <Text style={[globalStyles.textHeadline28, styles.textTitle]}>베프</Text>
        <Text style={[globalStyles.textBody15, styles.textDescription]}>
          베리어프리 커뮤니티, 베프!{'\n'}KUBF 프로젝트의 일환으로 제작되었습니다.
        </Text>
        <Button title="로그인하기" marginTop={rh(40)} onPress={onPressLogin} />
        <TouchableView style={styles.signUpButton} onPress={onPressSignUp}>
          <Text style={globalStyles.textBody14}>
            아직 배프 계정이 없다면? <Text style={styles.textSignUp}>회원가입</Text> 하러가기
          </Text>
        </TouchableView>
      </View>
      <Svg width={rw(376)} height={rw(180)}>
        <Ellipse cx={rw(188)} cy={rw(30)} rx={rw(240)} ry={rw(30)} fill={colors.colorPrimary} />
        <Rect x="0" y={rw(30)} width={rw(376)} height={rw(150)} fill={colors.colorPrimary} />
      </Svg>
    </SafeAreaView>
  );
};

export default LoginStartPresenter;
