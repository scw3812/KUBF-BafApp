import React from 'react';
import type { FC, ComponentProps } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { responsiveWidth as rw } from '../../style/dimensions';
import globalStyles from '../../style/styles';
import colors from '../../style/colors';

export type ButtonProps = ComponentProps<typeof TouchableOpacity> & {
  title: string;
  textColor?: string;
  backgroundColor?: string;
  marginTop?: number;
};

export const Button: FC<ButtonProps> = ({
  title,
  textColor = 'white',
  backgroundColor = colors.colorPrimary,
  marginTop = 0,
  ...touchableProps
}) => {
  return (
    <TouchableOpacity style={[styles.view, { backgroundColor, marginTop }]} {...touchableProps}>
      <Text style={[globalStyles.textBody15, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rw(8),
    paddingHorizontal: rw(14),
    paddingVertical: rw(16),
    marginHorizontal: rw(24),
  },
});
