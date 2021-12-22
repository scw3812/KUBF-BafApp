import React, { useEffect, useState, useLayoutEffect } from 'react';
import type { FC } from 'react';
import { Text } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useRecoilValue } from 'recoil';

import { RootStackParamList } from '../../RootNavigator';
import { MainTabParamList } from '../../MainNavigator';
import { MyPageStackParamList } from '../index';
import ProfilePostPresenter from './ProfilePostPresenter';
import { userApi } from '../../../api';
import { TouchableView } from '../../Common';
import type { PostData } from '../../Common';
import { LeftArrowBlack } from '../../../assets/images';
import { responsiveWidth as rw } from '../../../style/dimensions';
import globalStyles from '../../../style/styles';
import { userState } from '../../../state';

type ProfilePostProps = CompositeScreenProps<
  NativeStackScreenProps<MyPageStackParamList, 'ProfilePost'>,
  CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, NativeStackScreenProps<RootStackParamList>>
>;

const ProfilePost: FC<ProfilePostProps> = ({ navigation }) => {
  const user = useRecoilValue(userState);
  const [posts, setPosts] = useState<PostData[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableView onPress={() => navigation.goBack()} viewStyle={{ flexDirection: 'row', alignItems: 'center' }}>
          <LeftArrowBlack />
          <Text style={[globalStyles.textHeadline20, { marginLeft: rw(12) }]}>작성한 글</Text>
        </TouchableView>
      ),
    });
  }, [navigation]);

  const getProfilePosts = async () => {
    const { data } = await userApi.getPosts(user.id);
    setPosts(data.posts);
  };
  useEffect(() => {
    getProfilePosts();
  }, []);

  const handlePressPost = (post: PostData) => navigation.navigate('PostDetail', { post });

  return <ProfilePostPresenter posts={posts} onPressPost={handlePressPost} />;
};

export default ProfilePost;
