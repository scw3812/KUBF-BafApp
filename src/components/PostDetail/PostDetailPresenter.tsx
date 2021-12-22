import React from 'react';
import type { FC } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { DateTime } from 'luxon';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './PostDetail.style';
import { Comment, TouchableView } from '../Common';
import type { CommentData } from '../Common';
import type { PostData } from '../Common';
import globalStyles from '../../style/styles';
import colors from '../../style/colors';

interface PostdetailPresenterProps {
  nickname: string;
  post: PostData | undefined;
  comments: CommentData[];
  comment: string;
  onChangeComment: (text: string) => void;
  onPressDelete: () => void;
  onPressDeleteComment: (commentId: number) => void;
  onPressSend: () => void;
}

const PostDetailPresenter: FC<PostdetailPresenterProps> = ({
  nickname,
  post,
  comments,
  comment,
  onChangeComment,
  onPressDelete,
  onPressDeleteComment,
  onPressSend,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}>
      <Text style={[globalStyles.textHeadline20, styles.textTitle]}>{post?.title}</Text>
      <View style={styles.top}>
        <View>
          <Text style={globalStyles.textBody15}>{post?.nickname}</Text>
          <Text style={[globalStyles.textBody14, styles.textDate]}>
            {DateTime.fromISO(post?.createdAt ?? '')
              .plus({ hours: 9 })
              .toFormat('yyyy.MM.dd')}
          </Text>
        </View>
        {nickname === post?.nickname ? (
          <TouchableView onPress={onPressDelete}>
            <Text style={globalStyles.textBody15}>삭제</Text>
          </TouchableView>
        ) : null}
      </View>
      <Text style={[globalStyles.textBody15, styles.textContent]}>{post?.content}</Text>
      <View style={styles.commentContainer}>
        <Text style={[globalStyles.textBody14, styles.textCommentTitle]}>댓글 {comments?.length}개</Text>
        {comments.length ? (
          comments.map((comment) => (
            <Comment key={comment.id} userNickname={nickname} comment={comment} onPress={onPressDeleteComment} />
          ))
        ) : (
          <Text style={[globalStyles.textBody15, styles.textNoComment]}>
            아직 댓글이 없습니다 :){'\n'}
            클릭해서 댓글을 달아보세요.
          </Text>
        )}
      </View>
      <SafeAreaView style={styles.inputContainer} edges={['bottom']}>
        <TextInput
          style={[globalStyles.textBody15, styles.input]}
          value={comment}
          placeholder="클릭해서 댓글을 달아보세요."
          onChangeText={onChangeComment}
        />
        <TouchableView disabled={comment === ''} onPress={onPressSend}>
          <Text
            style={[globalStyles.textBody15, { color: comment === '' ? colors.colorGrayText : colors.colorPrimary }]}>
            등록
          </Text>
        </TouchableView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PostDetailPresenter;
