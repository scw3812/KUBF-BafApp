import React from 'react';
import type { FC } from 'react';
import { FlatList, View } from 'react-native';

import styles from './Direct.style';
import { Post, ImageCarousel, TouchableView } from '../Common';
import type { PostData } from '../Common';
import { AddPost } from '../../assets/images';
import { responsiveWidth as rw } from '../../style/dimensions';

interface DirectPresenterProps {
  bannerImages: string[];
  posts: PostData[];
  onPressPost: (post: PostData) => void;
  onPressAdd: () => void;
}

const DirectPresenter: FC<DirectPresenterProps> = ({ bannerImages, posts, onPressPost, onPressAdd }) => {
  return (
    <View style={styles.container}>
      <ImageCarousel data={bannerImages} onPress={(url: string) => console.log(url)} />
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} onPress={onPressPost} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
      />
      <TouchableView style={styles.addButton} onPress={onPressAdd}>
        <AddPost width={rw(40)} height={rw(40)} />
      </TouchableView>
    </View>
  );
};

export default DirectPresenter;
