import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './MyPageMain.style';
import globalStyles from '../../../style/styles';
import { RandomProfile, TouchableView } from '../../Common';
import { responsiveWidth as rw } from '../../../style/dimensions';

interface MyPageMainPresenterProps {
  nickname: string;
  name: string;
  postCount: number | undefined;
  commentCount: number | undefined;
  onPressPost: () => void;
  onPressComment: () => void;
  onPressLogout: () => void;
  onPressUnregister: () => void;
}

const MyPageMainPresenter: FC<MyPageMainPresenterProps> = ({
  nickname,
  name,
  postCount,
  commentCount,
  onPressPost,
  onPressComment,
  onPressLogout,
  onPressUnregister,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.profile}>
        <RandomProfile nickname={nickname} size={rw(60)} />
        <Text style={[globalStyles.textHeadline20, styles.textNickname]}>
          {nickname}
          {'\n'}
          <Text style={[globalStyles.textBody15, styles.textName]}>{name}</Text>
        </Text>
      </View>
      <TouchableView style={styles.myPageButton} viewStyle={styles.myPageButtonView} onPress={onPressPost}>
        <Text style={[globalStyles.textHeadline20, styles.textMyPage]}>내가 작성한 글 보기</Text>
        <Text style={globalStyles.textBody15}>{postCount ? `${postCount}개` : ''}</Text>
      </TouchableView>
      <TouchableView
        style={[styles.myPageButton, styles.commentButton]}
        viewStyle={styles.myPageButtonView}
        onPress={onPressComment}>
        <Text style={[globalStyles.textHeadline20, styles.textMyPage]}>내가 작성한 댓글 보기</Text>
        <Text style={globalStyles.textBody15}>{commentCount ? `${commentCount}개` : ''}</Text>
      </TouchableView>
      <View style={styles.myPageButtonView}>
        <Text style={[globalStyles.textHeadline20, styles.textMyPage]}>버전 정보</Text>
        <Text style={globalStyles.textBody15}>1.0.0</Text>
      </View>
      <TouchableView style={styles.myPageButton} viewStyle={styles.myPageButtonView} onPress={onPressLogout}>
        <Text style={[globalStyles.textHeadline20, styles.textMyPage]}>로그아웃</Text>
      </TouchableView>
      <TouchableView style={styles.myPageButton} viewStyle={styles.myPageButtonView} onPress={onPressUnregister}>
        <Text style={[globalStyles.textHeadline20, styles.textUnregister]}>탈퇴하기</Text>
      </TouchableView>
    </SafeAreaView>
  );
};

export default MyPageMainPresenter;
