import React from 'react';
import type { FC } from 'react';
import { FlatList, View } from 'react-native';

import styles from './ProfilePost.style';
import { Post } from '../../Common';
import type { PostData } from '../../Common';

interface ProfilePostPresenterProps {
  posts: PostData[];
  onPressPost: (post: PostData) => void;
}

const ProfilePostPresenter: FC<ProfilePostPresenterProps> = ({ posts, onPressPost }) => {
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

export default ProfilePostPresenter;
