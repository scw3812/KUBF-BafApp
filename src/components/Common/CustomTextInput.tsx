import React, { useState, useEffect } from 'react';
import type { FC, ComponentProps } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import globalStyles from '../../style/styles';
import colors from '../../style/colors';
import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';

export type ValidError = {
  error: boolean;
  errorMessage: string;
} | null;

export type CustomTextInputProps = ComponentProps<typeof TextInput> & {
  title?: string;
  validError?: ValidError;
};

export const CustomTextInput: FC<CustomTextInputProps> = ({ title, validError, style, ...textInputProps }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (validError) {
      setIsError(true);
    }
  }, [validError]);

  const handleChange = () => {
    if (isError) {
      setIsError(false);
    }
  };

  return (
    <View style={styles.view}>
      {title ? <Text style={[globalStyles.textBody15, styles.textTitle]}>{title}</Text> : null}
      <TextInput
        {...textInputProps}
        style={[globalStyles.textBody15, styles.textInput, style]}
        onChange={handleChange}
      />
      {isError ? <Text style={[globalStyles.textBody14, styles.textError]}>{validError?.errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  view: { width: '100%', marginBottom: rh(16), paddingHorizontal: rw(24) },
  textTitle: { marginBottom: rh(8) },
  textInput: {
    backgroundColor: colors.colorGray,
    borderRadius: rw(8),
    paddingHorizontal: rw(14),
    paddingVertical: rw(12),
  },
  textError: { color: colors.colorPrimary },
});
