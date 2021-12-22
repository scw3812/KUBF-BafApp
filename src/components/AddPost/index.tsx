import React, { useState } from 'react';
import type { FC } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useRecoilValue } from 'recoil';

import { RootStackParamList } from '../RootNavigator';
import AddPostPresenter from './AddPostPresenter';
import { postApi } from '../../api';
import { defaultErrorAlert } from '../../utils';
import { userState } from '../../state/index';

type AddPostProps = NativeStackScreenProps<RootStackParamList, 'AddPost'>;

const AddPost: FC<AddPostProps> = ({ route, navigation }) => {
  const user = useRecoilValue(userState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (text: string) => setTitle(text);
  const handleChangeContent = (text: string) => setContent(text);
  const handlePressAdd = async () => {
    try {
      await postApi.addPost({ userId: user.id, title, content, categoryId: route.params.categoryId });
      navigation.pop();
    } catch (error) {
      defaultErrorAlert();
    }
  };

  return (
    <AddPostPresenter
      title={title}
      content={content}
      onChangeTitle={handleChangeTitle}
      onChangeContent={handleChangeContent}
      onPressAdd={handlePressAdd}
    />
  );
};

export default AddPost;
