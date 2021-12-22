import { StyleSheet } from 'react-native';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  textTitle: { marginLeft: rw(24), marginTop: rh(16) },
  top: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: rw(24), marginTop: rh(10) },
  textDate: { color: colors.colorGrayText, fontStyle: 'italic', marginTop: rh(8) },
  textContent: { marginHorizontal: rw(24), marginTop: rh(30) },
  commentContainer: { flex: 1, backgroundColor: colors.colorGray, marginTop: rh(30) },
  textCommentTitle: { color: colors.colorPrimary, fontWeight: 'bold', marginTop: rh(10), marginLeft: rw(24) },
  textNoComment: { marginLeft: rw(24), marginTop: rh(20) },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: rh(20),
    paddingHorizontal: rw(24),
  },
  input: { flex: 1, marginRight: rw(12) },
});

export default styles;
