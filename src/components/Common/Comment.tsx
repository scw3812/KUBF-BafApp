import React from 'react';
import type { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';

import { responsiveHeight as rh, responsiveWidth as rw } from '../../style/dimensions';
import globalStyles from '../../style/styles';
import { TouchableView } from './TouchableView';
import { RandomProfile } from './RandomProfile';

export interface CommentData {
  id: number;
  content: string;
  nickname: string;
  createdAt: string;
}

export interface CommentProps {
  userNickname: string;
  comment: CommentData;
  onPress: (commentId: number) => void;
}

export const Comment: FC<CommentProps> = ({ userNickname, comment: { id, content, nickname, createdAt }, onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profile}>
          <RandomProfile nickname={nickname} />
          <Text style={[globalStyles.textBody14, styles.textDate]}>
            {nickname}_{DateTime.fromISO(createdAt).plus({ hours: 9 }).toFormat('yyyy.MM.dd')}
          </Text>
        </View>
        {userNickname === nickname ? (
          <TouchableView onPress={() => onPress(id)}>
            <Text>삭제</Text>
          </TouchableView>
        ) : null}
      </View>
      <Text style={[globalStyles.textBody15, styles.textDescription]} numberOfLines={3} ellipsizeMode="tail">
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: rh(24), paddingHorizontal: rw(24) },
  top: { flexDirection: 'row', justifyContent: 'space-between' },
  profile: { flexDirection: 'row', alignItems: 'flex-end' },
  textDate: { marginLeft: rw(12), marginBottom: rw(4) },
  textDescription: { marginTop: rh(20), marginBottom: rh(16) },
});
