import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useRecoilState } from 'recoil';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamList } from '../../RootNavigator';
import { MainTabParamList } from '../../MainNavigator';
import { MyPageStackParamList } from '../index';
import MyPageMainPresenter from './MyPageMainPresenter';
import { userState } from '../../../state/index';
import { defaultErrorAlert } from '../../../utils';
import { userApi } from '../../../api';

type MyPageMainProps = CompositeScreenProps<
  NativeStackScreenProps<MyPageStackParamList, 'MyPageMain'>,
  CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, NativeStackScreenProps<RootStackParamList>>
>;

const MyPageMain: FC<MyPageMainProps> = ({ navigation }) => {
  const [user, setUser] = useRecoilState(userState);
  const isFocused = useIsFocused();
  const [postCount, setPostCount] = useState<number>();
  const [commentCount, setCommentCount] = useState<number>();

  const getProfileCounts = async () => {
    try {
      const { data } = await userApi.getProfileCounts(user.id);
      setPostCount(data.postCount);
      setCommentCount(data.commentCount);
    } catch (error) {
      defaultErrorAlert();
    }
  };
  useEffect(() => {
    getProfileCounts();
  }, [user.id, isFocused]);

  const handlePressPost = () => navigation.navigate('ProfilePost');
  const handlePressComment = () => navigation.navigate('ProfileComment');
  const handlePressLogout = async () => {
    try {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      setUser({ id: 0, name: '', nickname: '', isAdmin: false });
      navigation.replace('LoginStart');
    } catch (error) {
      defaultErrorAlert();
    }
  };
  const handlePressUnregister = async () => {
    try {
      await userApi.deleteUser(user.id);
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
      setUser({ id: 0, name: '', nickname: '', isAdmin: false });
      navigation.replace('LoginStart');
    } catch (error) {
      defaultErrorAlert();
    }
  };

  return (
    <MyPageMainPresenter
      nickname={user.nickname}
      name={user.name}
      postCount={postCount}
      commentCount={commentCount}
      onPressPost={handlePressPost}
      onPressComment={handlePressComment}
      onPressLogout={handlePressLogout}
      onPressUnregister={handlePressUnregister}
    />
  );
};

export default MyPageMain;
