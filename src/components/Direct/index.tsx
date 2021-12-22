import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';

import { RootStackParamList } from '../RootNavigator';
import { MainTabParamList } from '../MainNavigator';
import DirectPresenter from './DirectPresenter';
import { postApi } from '../../api';
import type { PostData } from '../Common';

type DirectProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Direct'>,
  NativeStackScreenProps<RootStackParamList>
>;

const bannerImages = [
  'https://i.ytimg.com/vi/M6thb0-cF3g/maxresdefault.jpg',
  'https://scarlettlibrarian.files.wordpress.com/2010/08/professional.jpg',
  'https://biznpro.co.kr/wp-content/uploads/2020/06/problem-4129493_1920_wide-screen_rev1.jpg',
];

const Direct: FC<DirectProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState<PostData[]>([]);

  const getDirectPosts = async () => {
    const { data } = await postApi.getCategoryPosts(4);
    setPosts(data.posts);
  };
  useEffect(() => {
    getDirectPosts();
  }, [isFocused]);

  const handlePressPost = (post: PostData) => navigation.navigate('PostDetail', { post });
  const handlePressAdd = () => navigation.navigate('AddPost', { categoryId: 4 });

  return (
    <DirectPresenter
      bannerImages={bannerImages}
      posts={posts}
      onPressPost={handlePressPost}
      onPressAdd={handlePressAdd}
    />
  );
};

export default Direct;
