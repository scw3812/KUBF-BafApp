import React, { useEffect, useState, useLayoutEffect } from 'react';
import type { FC } from 'react';
import { Text } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';

import { RootStackParamList } from '../../RootNavigator';
import { MainTabParamList } from '../../MainNavigator';
import { HomeStackParamList } from '../index';
import CategoryPresenter from './CategoryPresenter';
import { postApi } from '../../../api';
import { TouchableView } from '../../Common';
import type { PostData } from '../../Common';
import { LeftArrowBlack } from '../../../assets/images';
import { responsiveWidth as rw } from '../../../style/dimensions';
import globalStyles from '../../../style/styles';

type CategoryProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'Category'>,
  CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, NativeStackScreenProps<RootStackParamList>>
>;

const Category: FC<CategoryProps> = ({ route, navigation }) => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState<PostData[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableView onPress={() => navigation.goBack()} viewStyle={{ flexDirection: 'row', alignItems: 'center' }}>
          <LeftArrowBlack />
          <Text style={[globalStyles.textHeadline20, { marginLeft: rw(12) }]}>{route.params.category}</Text>
        </TouchableView>
      ),
    });
  }, [navigation]);

  const getCategoryPosts = async () => {
    const { data } = await postApi.getCategoryPosts(route.params.categoryId);
    setPosts(data.posts);
  };
  useEffect(() => {
    getCategoryPosts();
  }, [isFocused]);

  const handlePressPost = (post: PostData) => navigation.navigate('PostDetail', { post });
  const handlePressAdd = () => navigation.navigate('AddPost', { categoryId: route.params.categoryId });

  return <CategoryPresenter posts={posts} onPressPost={handlePressPost} onPressAdd={handlePressAdd} />;
};

export default Category;
