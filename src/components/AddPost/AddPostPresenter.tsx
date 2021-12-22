import React from 'react';
import type { FC } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './AddPost.style';
import globalStyles from '../../style/styles';
import { Button, CustomTextInput } from '../Common';
import colors from '../../style/colors';

interface AddPostPresenterProps {
  title: string;
  content: string;
  onChangeTitle: (text: string) => void;
  onChangeContent: (text: string) => void;
  onPressAdd: () => void;
}

const AddPostPresenter: FC<AddPostPresenterProps> = ({
  title,
  content,
  onChangeTitle,
  onChangeContent,
  onPressAdd,
}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View>
        <Text style={[globalStyles.textHeadline20, styles.textTitle]}>게시물 작성</Text>
        <CustomTextInput value={title} title="제목" onChangeText={onChangeTitle} />
        <CustomTextInput
          value={content}
          style={styles.inputContent}
          onChangeText={onChangeContent}
          textAlignVertical="top"
          multiline
        />
      </View>
      <Button
        disabled={title === '' || content === ''}
        title="등록하기"
        textColor={title === '' || content === '' ? 'black' : undefined}
        backgroundColor={title === '' || content === '' ? colors.colorGray : undefined}
        onPress={onPressAdd}
      />
    </SafeAreaView>
  );
};

export default AddPostPresenter;
