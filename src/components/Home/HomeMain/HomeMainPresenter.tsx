import React from 'react';
import type { FC } from 'react';
import { ScrollView, Text, View } from 'react-native';

import styles from './HomeMain.style';
import { ImageCarousel, Post, TouchableView } from '../../Common';
import type { PostData } from '../../Common';
import globalStyles from '../../../style/styles';

interface HomeMainPresenterProps {
  bannerImages: string[];
  latestPost: PostData | undefined;
  categories: { id: number; name: string; hasNew: boolean }[];
  onPressPost: (post: PostData) => void;
  onPressCategory: (categoryId: number, category: string) => void;
  onPressAdd: () => void;
}

const HomeMainPresenter: FC<HomeMainPresenterProps> = ({
  bannerImages,
  latestPost,
  categories,
  onPressPost,
  onPressCategory,
  onPressAdd,
}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      bounces={false}>
      <ImageCarousel data={bannerImages} onPress={(item: string) => console.log(item)} />
      <Text style={[globalStyles.textBody15, styles.textLatestTitle]}>최신글</Text>
      {latestPost ? <Post post={latestPost} onPress={onPressPost} /> : null}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableView
            key={category.id}
            style={styles.categoryItem}
            viewStyle={styles.categoryItemView}
            onPress={() => onPressCategory(category.id, category.name)}>
            <Text style={globalStyles.textHeadline20}>{category.name}</Text>
            <Text style={[globalStyles.textBody15, styles.textNew]}>{category.hasNew ? 'New' : undefined}</Text>
          </TouchableView>
        ))}
      </View>
      <TouchableView style={styles.addButton} onPress={onPressAdd}>
        <Text>게시판 만들기</Text>
      </TouchableView>
    </ScrollView>
  );
};

export default HomeMainPresenter;
