import { StyleSheet } from 'react-native';
import colors from '../../../style/colors';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../../style/dimensions';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.colorGray },
  profile: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: rw(24),
    marginBottom: rh(8),
  },
  textNickname: { marginLeft: rw(16) },
  textName: { fontWeight: 'normal' },
  myPageButton: { width: '100%', backgroundColor: 'white' },
  myPageButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: rw(24),
    paddingVertical: rw(16),
  },
  textMyPage: { fontWeight: 'normal' },
  commentButton: { marginBottom: rh(8) },
  textUnregister: { color: colors.colorPrimary, fontWeight: 'normal' },
});

export default styles;
