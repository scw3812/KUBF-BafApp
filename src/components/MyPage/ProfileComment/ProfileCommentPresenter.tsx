import React from 'react';
import type { FC } from 'react';
import { FlatList, View } from 'react-native';

import styles from './ProfileComment.style';
import { Post } from '../../Common';
import type { PostData } from '../../Common';

interface ProfileCommentPresenterProps {
  posts: PostData[];
  onPressPost: (post: PostData) => void;
}

const ProfileCommentPresenter: FC<ProfileCommentPresenterProps> = ({ posts, onPressPost }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} onPress={onPressPost} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
      />
    </View>
  );
};

export default ProfileCommentPresenter;
