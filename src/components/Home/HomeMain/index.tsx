import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Alert } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';

import { RootStackParamList } from '../../RootNavigator';
import { MainTabParamList } from '../../MainNavigator';
import { HomeStackParamList } from '../index';
import HomeMainPresenter from './HomeMainPresenter';
import { postApi, categoryApi } from '../../../api';
import type { PostData } from '../../Common';
import { userState } from '../../../state';

type HomeMainProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'HomeMain'>,
  CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, NativeStackScreenProps<RootStackParamList>>
>;

const bannerImages = [
  'https://i.ytimg.com/vi/M6thb0-cF3g/maxresdefault.jpg',
  'https://scarlettlibrarian.files.wordpress.com/2010/08/professional.jpg',
  'https://biznpro.co.kr/wp-content/uploads/2020/06/problem-4129493_1920_wide-screen_rev1.jpg',
];

const HomeMain: FC<HomeMainProps> = ({ navigation }) => {
  const user = useRecoilValue(userState);
  const isFocused = useIsFocused();
  const [latestPost, setLatestPost] = useState<PostData>();
  const [categories, setCategories] = useState<{ id: number; name: string; hasNew: boolean }[]>([]);

  const getLatestPost = async () => {
    const { data } = await postApi.getLatestPost();
    setLatestPost(data.post);
  };
  useEffect(() => {
    getLatestPost();
  }, [isFocused]);

  const getCategories = async () => {
    const { data } = await categoryApi.getCategories();
    setCategories(data.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const handlePressPost = (post: PostData) => navigation.navigate('PostDetail', { post });
  const handlePressCategory = (categoryId: number, category: string) =>
    navigation.navigate('Category', { categoryId, category });
  const handlePressAdd = () => {
    if (!user.isAdmin) {
      Alert.alert('권한이 없습니다.', '관리자만 게시판 추가가 가능합니다.\n관리자에게 문의해주세요.');
      return;
    }
  };

  return (
    <HomeMainPresenter
      bannerImages={bannerImages}
      latestPost={latestPost}
      categories={categories}
      onPressPost={handlePressPost}
      onPressCategory={handlePressCategory}
      onPressAdd={handlePressAdd}
    />
  );
};

export default HomeMain;
