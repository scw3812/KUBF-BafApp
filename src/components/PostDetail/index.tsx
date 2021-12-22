import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRecoilValue } from 'recoil';
import { DateTime } from 'luxon';

import { RootStackParamList } from '../RootNavigator';
import PostDetailPresenter from './PostDetailPresenter';
import { postApi, commentApi } from '../../api';
import type { CommentData } from '../Common';
import { userState } from '../../state';
import { defaultErrorAlert } from '../../utils';

type PostDetailProps = NativeStackScreenProps<RootStackParamList, 'PostDetail'>;

const PostDetail: FC<PostDetailProps> = ({ route, navigation }) => {
  const user = useRecoilValue(userState);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [comment, setComment] = useState('');

  const getLatestPost = async () => {
    const { data } = await commentApi.getPostComments(route.params.post.id);
    setComments(data.comments);
  };
  useEffect(() => {
    getLatestPost();
  }, []);

  const handleChangeComment = (text: string) => setComment(text);
  const handlePressDelete = async () => {
    try {
      await postApi.deletePost(route.params.post.id);
      navigation.pop();
    } catch (error) {
      defaultErrorAlert();
    }
  };
  const handlePressDeleteComment = async (commentId: number) => {
    try {
      await commentApi.deleteComments(commentId);
      setComments((comments) => comments?.filter((comment) => comment.id !== commentId));
    } catch (error) {
      defaultErrorAlert();
    }
  };
  const handlePressSend = async () => {
    try {
      const { data } = await commentApi.postComment({
        userId: user.id,
        content: comment,
        postId: route.params.post.id,
      });
      setComments((comments) => [
        { id: data.id, content: comment, nickname: user.nickname, createdAt: DateTime.now().toISO() },
        ...comments,
      ]);
      setComment('');
    } catch (error) {
      defaultErrorAlert();
    }
  };

  return (
    <PostDetailPresenter
      nickname={user.nickname}
      post={route.params.post}
      comments={comments}
      comment={comment}
      onChangeComment={handleChangeComment}
      onPressDelete={handlePressDelete}
      onPressDeleteComment={handlePressDeleteComment}
      onPressSend={handlePressSend}
    />
  );
};

export default PostDetail;
