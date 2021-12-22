import { StyleSheet } from 'react-native';

import { responsiveWidth as rw, responsiveHeight as rh } from '../../style/dimensions';
import colors from '../../style/colors';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', backgroundColor: 'white' },
  textTitle: { marginTop: rh(64), marginLeft: rw(24) },
  textDescription: { marginTop: rh(8), marginLeft: rw(24) },
  signUpButton: { marginTop: rh(8) },
  textSignUp: { color: colors.colorPrimary },
});

export default styles;
