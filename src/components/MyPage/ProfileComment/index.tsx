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
import ProfileCommentPresenter from './ProfileCommentPresenter';
import { userApi } from '../../../api';
import { TouchableView } from '../../Common';
import type { PostData } from '../../Common';
import { LeftArrowBlack } from '../../../assets/images';
import { responsiveWidth as rw } from '../../../style/dimensions';
import globalStyles from '../../../style/styles';
import { userState } from '../../../state';

type ProfileCommentProps = CompositeScreenProps<
  NativeStackScreenProps<MyPageStackParamList, 'ProfileComment'>,
  CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, NativeStackScreenProps<RootStackParamList>>
>;

const ProfileComment: FC<ProfileCommentProps> = ({ navigation }) => {
  const user = useRecoilValue(userState);
  const [posts, setPosts] = useState<PostData[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableView onPress={() => navigation.goBack()} viewStyle={{ flexDirection: 'row', alignItems: 'center' }}>
          <LeftArrowBlack />
          <Text style={[globalStyles.textHeadline20, { marginLeft: rw(12) }]}>작성한 댓글</Text>
        </TouchableView>
      ),
    });
  }, [navigation]);

  const getProfileComments = async () => {
    const { data } = await userApi.getComments(user.id);
    setPosts(data.posts);
  };
  useEffect(() => {
    getProfileComments();
  }, []);

  const handlePressPost = (post: PostData) => navigation.navigate('PostDetail', { post });

  return <ProfileCommentPresenter posts={posts} onPressPost={handlePressPost} />;
};

export default ProfileComment;
