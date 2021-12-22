import React from 'react';
import type { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DateTime } from 'luxon';

import { responsiveHeight as rh, responsiveWidth as rw } from '../../style/dimensions';
import globalStyles from '../../style/styles';
import colors from '../../style/colors';
import { TouchableView } from './TouchableView';

export interface PostData {
  id: number;
  title: string;
  content: string;
  nickname: string;
  createdAt: string;
}

export interface PostProps {
  post: PostData;
  onPress: (post: PostData) => void;
}

export const Post: FC<PostProps> = ({ post: { id, title, content, nickname, createdAt }, onPress }) => {
  return (
    <TouchableView style={styles.container} onPress={() => onPress({ id, title, content, nickname, createdAt })}>
      <View style={styles.top}>
        <Text style={[globalStyles.textHeadline20]}>{title}</Text>
        <Text style={[globalStyles.textBody14, styles.textDate]}>
          {DateTime.fromISO(createdAt).plus({ hours: 9 }).toFormat('yyyy.MM.dd')}
        </Text>
      </View>
      <Text style={[globalStyles.textBody15, styles.textDescription]} numberOfLines={3} ellipsizeMode="tail">
        {content}
      </Text>
      <Text style={[globalStyles.textBody15]}>{nickname}</Text>
      <View style={styles.line} />
    </TouchableView>
  );
};

const styles = StyleSheet.create({
  container: { width: '100%', marginTop: rh(24), paddingHorizontal: rw(24) },
  top: { flexDirection: 'row', justifyContent: 'space-between' },
  textDate: { color: colors.colorGrayText, fontStyle: 'italic' },
  textDescription: { marginTop: rh(20), marginBottom: rh(16) },
  line: { height: 1, opacity: 0.5, backgroundColor: colors.colorGray, marginTop: rh(24) },
});
